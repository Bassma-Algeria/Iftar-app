import { restaurantsService } from "../../../../../Ports/DriverPorts/RestaurantsService";
import { ControllerFunction } from "../../@types/RequestResponse.interfaces";
import { makeRestController } from "../RestControllerFactory";

const updateRestaurant: ControllerFunction = makeRestController(
  ({ body, headers, queryParams }) => {
    const { authorization: authToken } = headers;
    if (!authToken) throw { authorization: "not authorized" };

    const { restaurantId } = queryParams;

    return restaurantsService.updateRestaurant({
      authToken,
      newRestaurantInfo: { ...body, restaurantId },
    });
  }
);

export { updateRestaurant };
