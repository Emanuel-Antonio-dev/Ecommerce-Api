import express, {Request, Response, NextFunction} from 'express';
import cors from 'cors';
import helmet from 'helmet';

const app = express();
const urlPath = '/api.ecommerce/v1';
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

app.use((req: Request, res: Response, next: NextFunction) => {
    res.status(400).json({success:false, statusCode: 400, message: 'Não conseguimos encontrar esta página.'});
});
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).json({success:false, statusCode: 500, message: 'Ocorreu um erro interno, tente novamente.'});
});

export {app};