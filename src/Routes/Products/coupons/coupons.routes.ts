import { Request, Response, Router } from "express";
import { MiddlewareAuthorization } from "../../../Common/Middlewares/Authorization/authorization";
import { CreateCouponController } from "../../../Controllers/Products/Coupons/create-coupon.controller";
import { ApplyCouponController } from "../../../Controllers/Products/Coupons/apply-coupon.controller";
import { GetAllCouponsController } from "../../../Controllers/Products/Coupons/get-all-coupons.controller";
import { GetCouponController } from "../../../Controllers/Products/Coupons/get-coupon.controller";
import { UpdateCouponController } from "../../../Controllers/Products/Coupons/update-coupon.controller";
import { DeleteCouponController } from "../../../Controllers/Products/Coupons/delete-coupon.Controller";

const couponsRoutes: Router = Router();

// Private — Admin
couponsRoutes.route("/coupons").post(MiddlewareAuthorization.authorization, MiddlewareAuthorization.isAdmin, (req: Request, res: Response) => { CreateCouponController.create(req, res) });
couponsRoutes.route("/coupons/:id_coupon").patch(MiddlewareAuthorization.authorization, MiddlewareAuthorization.isAdmin, (req: Request, res: Response) => { UpdateCouponController.update(req, res) });
couponsRoutes.route("/coupons/:id_coupon").delete(MiddlewareAuthorization.authorization, MiddlewareAuthorization.isAdmin, (req: Request, res: Response) => { DeleteCouponController.delete(req, res) });
couponsRoutes.route("/coupons").get(MiddlewareAuthorization.authorization, MiddlewareAuthorization.isAdmin, (req: Request, res: Response) => { GetAllCouponsController.getAll(req, res) });
couponsRoutes.route("/coupons/:id_coupon").get(MiddlewareAuthorization.authorization, MiddlewareAuthorization.isAdmin, (req: Request, res: Response) => { GetCouponController.get(req, res) });

// Private — Authenticated user
couponsRoutes.route("/coupons/apply").post(MiddlewareAuthorization.authorization, (req: Request, res: Response) => { ApplyCouponController.apply(req, res) });
couponsRoutes.route("/coupons/find").get(MiddlewareAuthorization.authorization, (req: Request, res: Response) => { GetCouponController.get(req, res) });

export { couponsRoutes };
