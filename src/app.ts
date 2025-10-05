import express, {Request, Response, NextFunction} from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { generalRoute } from './Routes/GeneralRoutes/routes';
import { adminRoutes } from './Routes/Users/Admin/routes';
import { categoryRoutes } from './Routes/Products/Categories/routes';
import { getRequestIp } from './Common/Middlewares/Observability/get-ip-address';
import { getErrorsDetails } from './Common/Middlewares/Observability/get-errors';
import { productsRoutes } from './Routes/Products/GeneralProducts/routes';
import { cartRoutes } from './Routes/Products/Cart/routes';
import cookieParser from 'cookie-parser';
import { producstOrders } from './Routes/Products/Products-Orders/routes';
import Stripe from 'stripe';


const app = express();
const urlBase = '/api.ecommerce/v1';
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: '2025-09-30.clover'
})

app.use(helmet(
  {
    referrerPolicy:{policy: "no-referrer"},
    frameguard: {action: "deny"},
    xssFilter: true,
    hidePoweredBy: true
  }
));
app.set('trust proy', 1)

app.use(cors({
    origin: true,
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())
app.use(getRequestIp)

app.use(urlBase, generalRoute)
app.use(urlBase, adminRoutes)
app.use(urlBase, categoryRoutes)
app.use(urlBase, productsRoutes)
app.use(urlBase, cartRoutes)
app.use(urlBase, producstOrders)

app.use((req: Request, res: Response, next: NextFunction) => {
    res.status(404).json({success:false, statusCode: 400, message: 'Não conseguimos encontrar esta página.'});
});
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  getErrorsDetails(err)
  res.status(500).json({success:false, statusCode: 500, message: 'Ocorreu um erro interno, tente novamente.'});
});

export {app};