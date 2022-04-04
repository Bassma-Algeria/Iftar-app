import { restaurantsService } from "../../../../../Ports/DriverPorts/RestaurantsService";
import { ControllerFunction } from "../../@types/RequestResponse.interfaces";
import { makeRestController } from "../RestControllerFactory";

const getAllRestaurants: ControllerFunction = makeRestController(() => {
  return restaurantsService.getAllRestaurants();
});

export { getAllRestaurants };
