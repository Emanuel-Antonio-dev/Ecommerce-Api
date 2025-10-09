import { Request, Response, Router} from "express";
import { upload } from "../../../Utils/Uploads/multer-config";
import { MiddlewareAuthorization } from "../../../Common/Middlewares/Authorization/authorization";
import { RegisterProductsController } from "../../../Controllers/Products/GeneralProducts/register-product.controller";
import { GetProductDatasController } from "../../../Controllers/Products/GeneralProducts/get-products.controller";
import { DeleteProductsController } from "../../../Controllers/Products/GeneralProducts/delete-product.controller";
import { EditProductDatasController } from "../../../Controllers/Products/GeneralProducts/edit-product-datas.controller";
import { RegisterProductReviewController } from "../../../Controllers/Products/ProductsReviews/register-product-review.controller";
import { GetAllProductReviewsController } from "../../../Controllers/Products/ProductsReviews/get-all-product-reviews.controller";


const productsRoutes: Router = Router()

productsRoutes.route("/products/register-product").post(MiddlewareAuthorization.authorization, MiddlewareAuthorization.isAdmin, upload.fields([{name:"ProductImages", maxCount: 10}]),(req: Request, res: Response) => {RegisterProductsController.register(req, res)})
productsRoutes.route("/products/delete-product/:id_product").delete(MiddlewareAuthorization.authorization, MiddlewareAuthorization.isAdmin, (req: Request, res: Response) => {DeleteProductsController.deleteProductDatas(req, res)})
productsRoutes.route("/products/edit-product/:id_product").patch(MiddlewareAuthorization.authorization, MiddlewareAuthorization.isAdmin,(req: Request, res: Response) =>{EditProductDatasController.editProduct(req, res)})

productsRoutes.route("/products/get-product/:id_product").get((req: Request, res: Response) => {GetProductDatasController.getProductDatas(req, res)})
productsRoutes.route("/products/get-all-products").get((req: Request, res: Response) => {GetProductDatasController.getAllProductsDatas(req, res)})
productsRoutes.route("/products/reviews/register-review").post((req: Request, res: Response) => {RegisterProductReviewController.registerReview(req, res)})
productsRoutes.route("/products/reviews/get-all-reviews/:id_product_fk").get((req: Request, res: Response) => {GetAllProductReviewsController.getReviews(req, res)})

export {productsRoutes}
