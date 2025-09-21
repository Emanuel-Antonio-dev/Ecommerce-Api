"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const app = (0, express_1.default)();
exports.app = app;
const urlPath = '/api.ecommerce/v1';
// Middleware
app.use((0, helmet_1.default)());
app.use((0, cors_1.default)({
    origin: true,
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((req, res, next) => {
    res.status(400).json({ success: false, statusCode: 400, message: 'Não conseguimos encontrar esta página.' });
});
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ success: false, statusCode: 500, message: 'Ocorreu um erro interno, tente novamente.' });
});
