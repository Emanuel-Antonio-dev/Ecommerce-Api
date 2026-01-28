import { Request, Response, Router} from "express";
import { upload } from "../../../Common/Utils/Uploads/multer-config";
import { MiddlewareAuthorization } from "../../../Common/Middlewares/Authorization/authorization";
import { RegisterProductsController } from "../../../Controllers/Products/GeneralProducts/register-product.controller";
import { GetProductDatasController } from "../../../Controllers/Products/GeneralProducts/get-products.controller";
import { DeleteProductsController } from "../../../Controllers/Products/GeneralProducts/delete-product.controller";
import { EditProductDatasController } from "../../../Controllers/Products/GeneralProducts/edit-product-datas.controller";
import { RegisterProductReviewController } from "../../../Controllers/Products/ProductsReviews/register-product-review.controller";
import { GetAllProductReviewsController } from "../../../Controllers/Products/ProductsReviews/get-all-product-reviews.controller";
import { HttpException } from "../../../Common/Middlewares/Filters/HttpException";
import { multerErrorHandler } from "../../../Common/Middlewares/Filters/errors";
import { GetAllProductDatasController } from "../../../Controllers/Products/GeneralProducts/get-all-products.controller";

const productsRoutes: Router = Router()

productsRoutes.route("/products").post(MiddlewareAuthorization.authorization, MiddlewareAuthorization.isAdmin, upload.fields([{name:"ProductImages", maxCount: 10}]),multerErrorHandler,(req: Request, res: Response) => {RegisterProductsController.register(req, res)})
productsRoutes.route("/products/:id_product").delete(MiddlewareAuthorization.authorization, MiddlewareAuthorization.isAdmin, (req: Request, res: Response) => {DeleteProductsController.delete(req, res)})
productsRoutes.route("/products/:id_product").patch(MiddlewareAuthorization.authorization, MiddlewareAuthorization.isAdmin,upload.fields([{name:"ProductImages", maxCount: 10}]),multerErrorHandler,(req: Request, res: Response) =>{EditProductDatasController.edit(req, res)})

productsRoutes.route("/products/:id_product").get((req: Request, res: Response) => {GetProductDatasController.get(req, res)})
productsRoutes.route("/products").get((req: Request, res: Response) => {GetAllProductDatasController.getAll(req, res)})
productsRoutes.route("/products/reviews").post((req: Request, res: Response) => {RegisterProductReviewController.register(req, res)})
productsRoutes.route("/products/reviews/:id_product_fk").get((req: Request, res: Response) => {GetAllProductReviewsController.get(req, res)})

export {productsRoutes}
