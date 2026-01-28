import { Request, Response, Router} from "express";
import { RegisterProductCategoryController } from "../../../Controllers/Products/Categories/register-service-category.controller";
import { GetProductsCategoriesController } from "../../../Controllers/Products/Categories/get-products-categories.controller";
import { DeleteProductCategoryController } from "../../../Controllers/Products/Categories/delete-service-category.controller";
import { EditProductCategoryController } from "../../../Controllers/Products/Categories/edit-service-category.controller";
import { DeleteAllProductsCategoriesController } from "../../../Controllers/Products/Categories/delete-all-services-categories.controller";
import { MiddlewareAuthorization } from "../../../Common/Middlewares/Authorization/authorization";
import { GetAllProductsCategoriesController } from "../../../Controllers/Products/Categories/get-all-products-categories.controller";

const categoryRoutes: Router = Router()

//Privates Services Categories Routes
categoryRoutes.route("/products/categories").post(MiddlewareAuthorization.authorization, MiddlewareAuthorization.isAdmin, (req: Request, res: Response) => {RegisterProductCategoryController.register(req, res)})
categoryRoutes.route("/products/categories/:id_category").patch(MiddlewareAuthorization.authorization, MiddlewareAuthorization.isAdmin, (req: Request, res: Response) =>{EditProductCategoryController.edit(req, res)})
categoryRoutes.route("/products/categories/:id_category").delete(MiddlewareAuthorization.authorization, MiddlewareAuthorization.isAdmin, (req: Request, res: Response) =>{DeleteProductCategoryController.delete(req, res)})
categoryRoutes.route("/products/categories").delete(MiddlewareAuthorization.authorization, MiddlewareAuthorization.isAdmin, (req: Request, res: Response) =>{DeleteAllProductsCategoriesController.deleteAll(req, res)})

//Publics Services Categories Routes
categoryRoutes.route("/products/categories").get((req: Request, res: Response) =>{GetAllProductsCategoriesController.getAll(req, res)})
categoryRoutes.route("/products/categories/:id_category").get((req: Request, res: Response) =>{GetProductsCategoriesController.get(req, res)})

export {categoryRoutes}