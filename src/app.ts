import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import { generalRoute } from './Routes/GeneralRoutes/routes';
import { adminRoutes } from './Routes/Users/Admin/routes';
import { categoryRoutes } from './Routes/Products/Categories/routes';
import { productsRoutes } from './Routes/Products/GeneralProducts/routes';
import { cartRoutes } from './Routes/Products/Cart/routes';
import { producstOrders } from './Routes/Products/Products-Orders/routes';
import { createStripeWebhookController } from './Controllers/Payments/PaymentByStripe/create-stripe-webhook.controller';
import swaggerUi from "swagger-ui-express";
import yaml from "yamljs";
import passport from 'passport';
import "./Services/Auth/Authentication/Oauth-Google/oauth-google.service";
import { settingsRoutes } from './Routes/Settings/routes';
import { paymentRoutes } from './Routes/Payments/routes';
import { variantsRoutes } from './Routes/Products/Variants/routes';
import { wishlistRoutes } from './Routes/Products/Whishlist/wishlist.routes';
import { shipmentsRoutes } from './Routes/Products/Shipments/routes';
import { systemLogsRoutes } from './Routes/Settings/system-logs.routes';
// ✅ FIX: router existia e estava correto, mas nunca era importado/montado —
// toda a API de cupons (/coupons/*) estava inacessível (404 em produção).
import { couponsRoutes } from './Routes/Products/coupons/coupons.routes';
import { csrfProtection } from './Common/Middlewares/Authorization/csrf-protect';
import { detectClient } from './Common/Middlewares/Authorization/detct-client';
import { limiterMiddleware } from './Common/Middlewares/Limiters/requests-limiter.config';
import { authorizeRoles } from './Common/Middlewares/Authorization/authorize-roles';

const app = express();
const urlBase = '/api.ecommerce/v1';
const swaggerYamlDocument = yaml.load("./docs.yaml");
const isProd = process.env.NODE_ENV === 'production';

// Rate limiters diferenciados por sensibilidade
const apiLimiter = limiterMiddleware("Muitas requisições. Tente novamente mais tarde.", 1, 100, "api-global");
// ✅ FIX: "authLimiter" era declarado mas nunca aplicado a nenhuma rota — as
// rotas de auth já usam limiters próprios e mais específicos (ver
// src/Routes/GeneralRoutes/routes.ts). Código morto removido.

// Whitelist explícita de origens
const allowedOrigins = (process.env.ALLOWED_ORIGINS ?? '')
  .split(',')
  .map(o => o.trim())
  .filter(Boolean);

app.use(helmet({
  referrerPolicy: { policy: "no-referrer" },
  frameguard: { action: "deny" },
  xssFilter: true,
  hidePoweredBy: true,
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      objectSrc: ["'none'"],
      frameAncestors: ["'none'"],
    },
  },
  hsts: isProd ? { maxAge: 31536000, includeSubDomains: true, preload: true } : false,
}));

app.set('trust proxy', 1);

app.use(cors({
  origin: (origin, callback) => {
    // permite chamadas sem origin (ex: curl, mobile apps, Postman)
    if (!origin || allowedOrigins.includes(origin)) {
      return callback(null, true);
    }
    return callback(new Error('Não permitido por CORS'));
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'HEAD'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

app.use(passport.initialize());

// Docs só fora de produção, ou protegidos por auth de admin
if (!isProd) {
  app.use(`${urlBase}/docs`, swaggerUi.serve, swaggerUi.setup(swaggerYamlDocument));
} else {
  app.use(`${urlBase}/docs`, authorizeRoles('admin'), swaggerUi.serve, swaggerUi.setup(swaggerYamlDocument));
}

// Webhook Stripe tem de vir ANTES do express.json() — já está correto
app.post(`${urlBase}/webhook/stripe`, express.raw({ type: "application/json" }), createStripeWebhookController);

app.use(express.json({ limit: '1mb' }));
app.use(express.urlencoded({ extended: true, limit: '1mb' }));
app.use(cookieParser(process.env.COOKIE_SECRET));

//app.use(csrfProtection);
app.use(detectClient);

// Limiter geral
app.use(apiLimiter);

// Limiter mais restrito só nas rotas de auth (aplica dentro de generalRoute
// idealmente, mas se auth estiver dentro de generalRoute, aplica lá dentro
// nas rotas específicas de login/register/reset-password)

app.use(urlBase, generalRoute);
app.use(urlBase, adminRoutes);
app.use(urlBase, categoryRoutes);
app.use(urlBase, productsRoutes);
app.use(urlBase, cartRoutes);
app.use(urlBase, producstOrders);
app.use(urlBase, settingsRoutes);
app.use(urlBase, paymentRoutes);
app.use(urlBase, variantsRoutes);
app.use(urlBase, wishlistRoutes);
app.use(urlBase, shipmentsRoutes);
app.use(urlBase, systemLogsRoutes);
app.use(urlBase, couponsRoutes);

app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(404).json({ success: false, statusCode: 404, message: 'Não conseguimos encontrar esta página.' });
});

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  // Log estruturado — troca por Sentry/Winston em produção
  console.error(err);

  const statusCode = err.statusCode ?? 500;
  res.status(statusCode).json({
    success: false,
    statusCode,
    message: isProd && statusCode === 500
      ? 'Ocorreu um erro interno, tente novamente.'
      : err.message ?? 'Ocorreu um erro interno, tente novamente.',
  });
});

export { app };