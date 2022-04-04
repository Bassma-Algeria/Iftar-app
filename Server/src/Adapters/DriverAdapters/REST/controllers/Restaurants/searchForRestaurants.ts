import { restaurantsService } from "../../../../../Ports/DriverPorts/RestaurantsService";
import { ControllerFunction } from "../../@types/RequestResponse.interfaces";
import { makeRestController } from "../RestControllerFactory";

const searchForRestaurants: ControllerFunction = makeRestController(({ queryParams }) => {
  const { keyword } = queryParams;
  return restaurantsService.searchFor(keyword);
});

export { searchForRestaurants };
