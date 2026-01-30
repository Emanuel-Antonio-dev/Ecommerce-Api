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
import { createStripeWebhookController } from './Controllers/Payments/create-stripe-webhook.controller';
import { swaggerConfig } from './docs/swagger';
import swaggerUi from "swagger-ui-express"
import yaml from "yamljs"
import passport from 'passport';
import "./Services/Auth/Authentication/Oauth-Google/oauth-google.service"

const app = express();
const urlBase = '/api.ecommerce/v1';
const swaggerYamlDocument = yaml.load("./openai.yaml")

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

app.use(urlBase, generalRoute)
app.use(urlBase, adminRoutes)
app.use(urlBase, categoryRoutes)
app.use(urlBase, productsRoutes)
app.use(urlBase, cartRoutes)
app.use(urlBase, producstOrders)


app.use((req: Request, res: Response, next: NextFunction) => {
    res.status(404).json({success:false, statusCode: 404, message: 'Não conseguimos encontrar esta página.'});
});
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).json({success:false, statusCode: 500, message: 'Ocorreu um erro interno, tente novamente.'});
});

export {app};