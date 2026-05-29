import { Request, Response, Router } from "express";
import { MiddlewareAuthorization } from "../../../Common/Middlewares/Authorization/authorization";
import { GetAllShipmentsController } from "../../../Controllers/Products/Shipments/Get-all-shipments.controller";
import { GetShipmentsController } from "../../../Controllers/Products/Shipments/Get-shipments.controller";
import { UpdateShipmentStatusController } from "../../../Controllers/Products/Shipments/Update-shipment-status.controller";
import { RegisterShipmentController } from "../../../Controllers/Products/Shipments/Register-shipment.controller";

const shipmentsRoutes: Router = Router();

// Private
shipmentsRoutes.route("/shipments").post(MiddlewareAuthorization.authorization, MiddlewareAuthorization.isAdmin, (req: Request, res: Response) => { RegisterShipmentController.register(req, res) });
shipmentsRoutes.route("/shipments/:id_shipment/status").patch(MiddlewareAuthorization.authorization, MiddlewareAuthorization.isAdmin, (req: Request, res: Response) => { UpdateShipmentStatusController.updateStatus(req, res) });
shipmentsRoutes.route("/shipments").get(MiddlewareAuthorization.authorization, MiddlewareAuthorization.isAdmin, (req: Request, res: Response) => { GetAllShipmentsController.getAll(req, res) });

// Public (authenticated)
shipmentsRoutes.route("/shipments/find").get(MiddlewareAuthorization.authorization, (req: Request, res: Response) => { GetShipmentsController.get(req, res) });
shipmentsRoutes.route("/shipments/order/:id_order").get(MiddlewareAuthorization.authorization, (req: Request, res: Response) => { GetShipmentsController.get(req, res) });

export { shipmentsRoutes };
