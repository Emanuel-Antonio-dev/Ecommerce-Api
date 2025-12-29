import swaggerJsdoc from "swagger-jsdoc"

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "E-commerce API",
      version: "1.0.0",
      description: "Documentação da API de E-commerce",
    },
    servers: [
      {
        url: "http://localhost:3000/api.ecommerce/v1",
        description: "Servidor Local",
      },
    ],
    components: {
      securitySchemes: {
        cookieAuth: {
          type: "apiKey",
          in: "cookie",
          name: "refreshToken",
        },
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
    security: [
      { bearerAuth: [] },
    ],
  },
  apis: ["./src/routes/**/*.js"],
};
const swaggerConfig = swaggerJsdoc(options) 
export {swaggerConfig};
