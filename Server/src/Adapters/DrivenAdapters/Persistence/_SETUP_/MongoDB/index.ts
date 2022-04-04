import mongoose, { model } from "mongoose";

import { restaurantOwnerSchema } from "./Schemas/RestaurantOwner.schema";
import { restaurantSchema } from "./Schemas/Restaurant.schema";

const connectToMongo = () => {
  const uri = process.env.MONGO_DB_URI;
  if (!uri) throw new Error("must have the mongo db uri in your envirement");

  return mongoose.connect(uri);
};

const RestaurantOwnerModel = model("RestaurantOwners", restaurantOwnerSchema);
const RestaurantModel = model("Restaurants", restaurantSchema);

export { RestaurantOwnerModel, RestaurantModel, connectToMongo };