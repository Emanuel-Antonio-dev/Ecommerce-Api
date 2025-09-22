import express, {Request, Response, NextFunction} from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { generalRoute } from './Routes/GeneralRoutes/routes';
import { clientRoutes } from './Routes/Users/Client/routes';
import { adminRoutes } from './Routes/Users/Admin/routes';
import { categoryRoutes } from './Routes/Products/Categories/routes';
import { getRequestIp } from './Common/Middlewares/Observability/get-ip-address';
import { getErrorsDetails } from './Common/Middlewares/Observability/get-errors';


const app = express();
const urlBase = '/api.ecommerce/v1';
// Middleware
app.use(helmet());
app.use(cors({
    origin: true,
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(getRequestIp)

app.use(urlBase, generalRoute)
app.use(urlBase, adminRoutes)
app.use(urlBase, categoryRoutes)

app.use((req: Request, res: Response, next: NextFunction) => {
    res.status(400).json({success:false, statusCode: 400, message: 'Não conseguimos encontrar esta página.'});
});
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  getErrorsDetails(err)
  res.status(500).json({success:false, statusCode: 500, message: 'Ocorreu um erro interno, tente novamente.'});
});

export {app};