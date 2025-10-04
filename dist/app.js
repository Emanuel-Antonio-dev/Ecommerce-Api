"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const routes_1 = require("./Routes/GeneralRoutes/routes");
const routes_2 = require("./Routes/Users/Admin/routes");
const routes_3 = require("./Routes/Products/Categories/routes");
const get_ip_address_1 = require("./Common/Middlewares/Observability/get-ip-address");
const get_errors_1 = require("./Common/Middlewares/Observability/get-errors");
const routes_4 = require("./Routes/Products/GeneralProducts/routes");
const routes_5 = require("./Routes/Products/Cart/routes");
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const routes_6 = require("./Routes/Products/Products-Orders/routes");
const app = (0, express_1.default)();
exports.app = app;
const urlBase = '/api.ecommerce/v1';
// Middlewares
app.use((0, helmet_1.default)({
    referrerPolicy: { policy: "no-referrer" },
    frameguard: { action: "deny" },
    xssFilter: true,
    hidePoweredBy: true
}));
app.use((0, cors_1.default)({
    origin: true,
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cookie_parser_1.default)());
app.use(get_ip_address_1.getRequestIp);
// App routes
app.use(urlBase, routes_1.generalRoute);
app.use(urlBase, routes_2.adminRoutes);
app.use(urlBase, routes_3.categoryRoutes);
app.use(urlBase, routes_4.productsRoutes);
app.use(urlBase, routes_5.cartRoutes);
app.use(urlBase, routes_6.producstOrders);
// Catch 404 and forward to error handler 
app.use((req, res, next) => {
    res.status(404).json({ success: false, statusCode: 400, message: 'Não conseguimos encontrar esta página.' });
});
app.use((err, req, res, next) => {
    console.error(err.stack);
    (0, get_errors_1.getErrorsDetails)(err);
    res.status(500).json({ success: false, statusCode: 500, message: 'Ocorreu um erro interno, tente novamente.' });
});
