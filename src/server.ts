import "dotenv/config";
import { app } from "./app";

const PORT = Number(process.env.PORT) || 3001;
const HOST = "0.0.0.0";

function startServer() {
  app.listen(PORT, HOST, () => {
    console.log(`🚀 This server is running on http://localhost:${PORT}/api.ecommerce/v1`);
  });
}

startServer();
