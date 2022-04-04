import { ControllerFunction, STATUS_CODES } from "../../@types/RequestResponse.interfaces";
import { restaurantsService } from "../../../../../Ports/DriverPorts/RestaurantsService";
import { makeRestController } from "../RestControllerFactory";

const getRestaurant: ControllerFunction = makeRestController(({ queryParams }) => {
  const { restaurantId } = queryParams;
  return restaurantsService.getRestaurantById(restaurantId);
});

export { getRestaurant };
