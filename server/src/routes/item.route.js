import { Router } from "express";
import { getAllShoppingItems,addShoppingItems,updateShoppingList} from "../controllers/item.controller.js";
import { auth } from "../middleware/auth.middleware.js";
const itemRouter = Router();
itemRouter.get("/",auth, getAllShoppingItems)

itemRouter.route("/create",auth)
            .post(addShoppingItems)
itemRouter.route("/:id",auth)
            .put(updateShoppingList)

export default itemRouter;