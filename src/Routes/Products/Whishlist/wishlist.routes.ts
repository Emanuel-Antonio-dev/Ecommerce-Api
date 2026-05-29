import { Request, Response, Router } from "express";
import { MiddlewareAuthorization } from "../../../Common/Middlewares/Authorization/authorization";
import { AddToWishlistController } from "../../../Controllers/Products/Wishlist/add-to-wishlist.controller";
import { RemoveFromWishlistController } from "../../../Controllers/Products/Wishlist/remove-from-wishlist.controller";
import { GetWishlistController } from "../../../Controllers/Products/Wishlist/get-wishlist.controller";
import { ClearWishlistController } from "../../../Controllers/Products/Wishlist/clear-wishlist.controller";

const wishlistRoutes: Router = Router();

// Private — Authenticated user
wishlistRoutes.route("/wishlist").get(MiddlewareAuthorization.authorization, (req: Request, res: Response) => { GetWishlistController.get(req, res) });
wishlistRoutes.route("/wishlist").post(MiddlewareAuthorization.authorization, (req: Request, res: Response) => { AddToWishlistController.add(req, res) });
wishlistRoutes.route("/wishlist/clear").delete(MiddlewareAuthorization.authorization, (req: Request, res: Response) => { ClearWishlistController.clear(req, res) });
wishlistRoutes.route("/wishlist/:id_product_fk").delete(MiddlewareAuthorization.authorization, (req: Request, res: Response) => { RemoveFromWishlistController.remove(req, res) });

export { wishlistRoutes };
