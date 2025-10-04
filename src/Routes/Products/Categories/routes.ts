import { Request, Response, Router} from "express";
import { RegisterProductCategoryController } from "../../../Controllers/Products/Categories/register-service-category.controller";
import { GetProductsCategoriesController } from "../../../Controllers/Products/Categories/get-products-categories.controller";
import { DeleteProductCategoryController } from "../../../Controllers/Products/Categories/delete-service-category.controller";
import { EditProductCategoryController } from "../../../Controllers/Products/Categories/update-service-category.controller";
import { DeleteAllProductsCategoriesController } from "../../../Controllers/Products/Categories/delete-all-services-categories.controller";
import { MiddlewareAuthorization } from "../../../Common/Middlewares/Authorization/authorization";

const categoryRoutes: Router = Router()

//Privates Services Categories Routes
categoryRoutes.route("/products/categories/register-category").post( (req: Request, res: Response) => {RegisterProductCategoryController.register(req, res)})
categoryRoutes.route("/products/categories/edit-category/:id_category").patch((req: Request, res: Response) =>{EditProductCategoryController.editProduct(req, res)})
categoryRoutes.route("/products/categories/delete-category/:id_category").delete((req: Request, res: Response) =>{DeleteProductCategoryController.delete(req, res)})
categoryRoutes.route("/products/categories/delete-all-categories").delete((req: Request, res: Response) =>{DeleteAllProductsCategoriesController.deleteAll(req, res)})

//Publics Services Categories Routes
categoryRoutes.route("/products/categories/get-all-categories").get((req: Request, res: Response) =>{GetProductsCategoriesController.findAll(req, res)})
categoryRoutes.route("/products/categories/:id_category").get((req: Request, res: Response) =>{GetProductsCategoriesController.find(req, res)})

export {categoryRoutes}