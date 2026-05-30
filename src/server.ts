import "dotenv/config";
import { app } from "./app";

const PORT = Number(process.env.PORT) || 3002;
const HOST = "0.0.0.0";

function startServer() {
  app.listen(PORT, HOST, () => {
    console.log(`🚀 This server is running on http://localhost:${PORT}/api.ecommerce/v1`);
    console.log(`📄 Documentation is running on http://localhost:${PORT}/api.ecommerce/v1/docs`);
  });
}

startServer();
