import { Request, Response, Router } from "express";
import { MiddlewareAuthorization } from "../../../Common/Middlewares/Authorization/authorization";
import { RegisterProductVariantController } from "../../../Controllers/Products/Variants/Register-product-variant.controller";
import { GetProductVariantsController } from "../../../Controllers/Products/Variants/Get-product-variants.controller";
import { GetVariantByIdController } from "../../../Controllers/Products/Variants/Get-variant-by-id.controller";
import { UpdateVariantStockController } from "../../../Controllers/Products/Variants/Update-variant-stock.controller";

const variantsRoutes: Router = Router();

// Private — Admin
variantsRoutes.route("/products/variants").post(MiddlewareAuthorization.authorization, MiddlewareAuthorization.isAdmin, (req: Request, res: Response) => { RegisterProductVariantController.register(req, res) });
variantsRoutes.route("/products/variants/:id_variant/stock").patch(MiddlewareAuthorization.authorization, MiddlewareAuthorization.isAdmin, (req: Request, res: Response) => { UpdateVariantStockController.updateStock(req, res) });

// Public
variantsRoutes.route("/products/variants/:id_product/product").get((req: Request, res: Response) => { GetProductVariantsController.get(req, res) });
variantsRoutes.route("/products/variants/:id_variant").get((req: Request, res: Response) => { GetVariantByIdController.get(req, res) });

export { variantsRoutes };
