import express, {Request, Response, NextFunction} from 'express';
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
import { swaggerConfig } from './docs/swagger';
import swaggerUi from "swagger-ui-express"
import yaml from "yamljs"
import passport from 'passport';
import "./Services/Auth/Authentication/Oauth-Google/oauth-google.service"
import { settingsRoutes } from './Routes/Settings/routes';
import { paymentRoutes } from './Routes/Payments/routes';
import { variantsRoutes } from './Routes/Products/Variants/routes';
import { wishlistRoutes } from './Routes/Products/Whishlist/wishlist.routes';
import { shipmentsRoutes } from './Routes/Products/Shipments/routes';
import { systemLogsRoutes } from './Routes/Settings/system-logs.routes';
import { csrfProtection } from './Common/Middlewares/Authorization/csrf-protect';
import { detectClient } from './Common/Middlewares/Authorization/detct-client';
import { limiterMiddleware } from './Common/Middlewares/Limiters/requests-limiter.config';

const app = express();
const urlBase = '/api.ecommerce/v1';
const swaggerYamlDocument = yaml.load("./openai.yaml")
const apiLimiter = limiterMiddleware("Muitas requisições. Tente novamente mais tarde.", 1, 100)

app.use(helmet(
  {
    referrerPolicy:{policy: "no-referrer"},
    frameguard: {action: "deny"},
    xssFilter: true,
    hidePoweredBy: true
  }
));

app.set('trust proxy', 1)
app.use(cors({
    origin: true,
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'HEAD'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(passport.initialize())
app.use(`${urlBase}/docs`, swaggerUi.serve, swaggerUi.setup(swaggerYamlDocument))
app.post(`${urlBase}/webhook/stripe`, express.raw({type:"application/json" }), createStripeWebhookController)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())

app.use(csrfProtection)
app.use(detectClient)
app.use(apiLimiter)

app.use(urlBase, generalRoute)
app.use(urlBase, adminRoutes)
app.use(urlBase, categoryRoutes)
app.use(urlBase, productsRoutes)
app.use(urlBase, cartRoutes)
app.use(urlBase, producstOrders)
app.use(urlBase, settingsRoutes)
app.use(urlBase, paymentRoutes)
app.use(urlBase, variantsRoutes)
app.use(urlBase, wishlistRoutes)
app.use(urlBase, shipmentsRoutes)
app.use(urlBase, systemLogsRoutes)

app.use((req: Request, res: Response, next: NextFunction) => {
    res.status(404).json({success:false, statusCode: 404, message: 'Não conseguimos encontrar esta página.'});
});
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).json({success:false, statusCode: 500, message: 'Ocorreu um erro interno, tente novamente.'});
});

export {app};