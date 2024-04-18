import express from "express";
import { getShoeData } from "../controllers/shoeController.js";
import { validateShoeName } from "../middleware/validators.js";
// We will create a router object
const router = express.Router();
// We will create a route for the weather data based on the city name
router.get("/:model", validateShoeName, getShoeData);
// We will export the router
export default router;
//# sourceMappingURL=shoeRoute.js.map