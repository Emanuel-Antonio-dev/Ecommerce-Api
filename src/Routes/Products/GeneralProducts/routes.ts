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
import { RegisterProductsTagsController } from "../../../Controllers/Products/Tags/register-product-tag.controller";
import { GetProductTagsController } from "../../../Controllers/Products/Tags/get-product-tag.controller";
import { DeleteProductTagController } from "../../../Controllers/Products/Tags/delete-product-tag.controller";
import { GetAllTagsPerProductController } from "../../../Controllers/Products/Tags/get-all-tags-per-product.controller";
import { GetAllProductTagsController } from "../../../Controllers/Products/Tags/get-all-products-tags.controller";
import { RegisterProductBrandController } from "../../../Controllers/Products/Brands/register-products-brands.controller";
import { GetAllProductsBrandsController } from "../../../Controllers/Products/Brands/get-all-products-brands.controller";
import { GetProductBrandController } from "../../../Controllers/Products/Brands/get-products-brands.controller";
import { DeleteProductBrandController } from "../../../Controllers/Products/Brands/delete-product-brand.controller";
import { EditProductBrandController } from "../../../Controllers/Products/Brands/edit-product-brands.controller";
import { DeleteAllProductsBrandsController } from "../../../Controllers/Products/Brands/delete-all-products-brands.controller";

const productsRoutes: Router = Router()

productsRoutes.route("/products").post(MiddlewareAuthorization.authorization, MiddlewareAuthorization.isAdmin, upload.fields([{name:"ProductImages", maxCount: 10}]),multerErrorHandler,(req: Request, res: Response) => {RegisterProductsController.register(req, res)})
productsRoutes.route("/products/:id_product").delete(MiddlewareAuthorization.authorization, MiddlewareAuthorization.isAdmin, (req: Request, res: Response) => {DeleteProductsController.delete(req, res)})
productsRoutes.route("/products/:id_product").patch(MiddlewareAuthorization.authorization, MiddlewareAuthorization.isAdmin,upload.fields([{name:"ProductImages", maxCount: 10}]),multerErrorHandler,(req: Request, res: Response) =>{EditProductDatasController.edit(req, res)})
productsRoutes.route("/products/:id_product").get((req: Request, res: Response) => {GetProductDatasController.get(req, res)})
productsRoutes.route("/products").get((req: Request, res: Response) => {GetAllProductDatasController.getAll(req, res)})

productsRoutes.route("/products/reviews").post(MiddlewareAuthorization.authorization,MiddlewareAuthorization.isClient,(req: Request, res: Response) => {RegisterProductReviewController.register(req, res)})
productsRoutes.route("/products/:id_product_fk/reviews").get((req: Request, res: Response) => {GetAllProductReviewsController.get(req, res)})

productsRoutes.route("/tags").post(MiddlewareAuthorization.authorization, MiddlewareAuthorization.isAdmin, (req: Request, res: Response) => {RegisterProductsTagsController.register(req, res)})
productsRoutes.route("/tags").get((req: Request, res: Response) => {GetAllProductTagsController.getAll(req, res)})
productsRoutes.route("/tags/:tag").get((req: Request, res: Response) => {GetProductTagsController.get(req, res)})
//productsRoutes.route("/tags/:id_prodcut_fk").get((req: Request, res: Response) => {GetAllTagsPerProductController.getAll(req, res)})
productsRoutes.route("/tags/:id_tag").delete(MiddlewareAuthorization.authorization, MiddlewareAuthorization.isAdmin, (req: Request, res: Response) => {DeleteProductTagController.delete(req, res)})

productsRoutes.route("/brands").post(MiddlewareAuthorization.authorization, MiddlewareAuthorization.isAdmin, (req: Request, res: Response) => {RegisterProductBrandController.register(req, res)})
productsRoutes.route("/brands").get((req: Request, res: Response) => {GetAllProductsBrandsController.getAll(req, res)})
productsRoutes.route("/brands/:name").get((req: Request, res: Response) => {GetProductBrandController.get(req, res)})
productsRoutes.route("/brands/:id_brand").delete(MiddlewareAuthorization.authorization, MiddlewareAuthorization.isAdmin, (req: Request, res: Response) => {DeleteProductBrandController.delete(req, res)})
productsRoutes.route("/brands/:id_brand").put(MiddlewareAuthorization.authorization, MiddlewareAuthorization.isAdmin, (req: Request, res: Response) => {EditProductBrandController.edit(req, res)})
productsRoutes.route("/brands").delete(MiddlewareAuthorization.authorization, MiddlewareAuthorization.isAdmin, (req: Request, res: Response) => {DeleteAllProductsBrandsController.deleteAll(req, res)})

export {productsRoutes}
