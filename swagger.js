import swaggerAutogen from "swagger-autogen"
const outputFile = './swagger_output.json';
const endpointsFiles = ['./dist/app.js'];

swaggerAutogen(outputFile, endpointsFiles);