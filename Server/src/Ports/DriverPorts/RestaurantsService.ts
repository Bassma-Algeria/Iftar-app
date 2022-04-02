import { RestaurantsServiceFacade } from "../../UseCases/RestaurantsService/RestaurantsServiceFacade";

import { cloudGateway } from "../DrivenPorts/CloudGateway/CloudGateway";
import { restaurantsGateway } from "../DrivenPorts/Persistence/RestaurantsGateway/RestaurantsGateway";
import { tokenManager } from "../DrivenPorts/TokenManager/TokenManager";

const restaurantsService = new RestaurantsServiceFacade(
  restaurantsGateway,
  tokenManager,
  cloudGateway
);

export { restaurantsService };
