import { Router } from "express";

import { authRoutes } from "./AuthRoutes";
import { restaurantsRoutes } from "./RestaurantsRoutes";

const allRoutes: Router = Router();

allRoutes.use("/auth", authRoutes);
allRoutes.post("/restaurants", restaurantsRoutes);

export { allRoutes };
