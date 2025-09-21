import { app } from "./app";

const PORT = Number(process.env.PORT) || 3000;
const HOST = process.env.HOST || '0.0.0.0'

async function startServer() {
    try
    {
        await app.listen(PORT, HOST, () => {
        console.log(`Server is running on port ${PORT}`);
    });    
    } catch (error: any)
    {
        console.error('Failed to start server:', error);
        process.exit(1);    
    }

}

startServer();