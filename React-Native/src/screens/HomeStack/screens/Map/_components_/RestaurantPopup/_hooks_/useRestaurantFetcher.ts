import {useEffect, useState} from 'react';

import {restuarantsGateway} from '../../../../../../../Gateways';

import type {RestaurantInfo} from '../../../../../../../Gateways/RestaurantsGateway/RestaurantsGateway.interface';

const useRestaurantFetcher = (restaurantId: string | undefined) => {
  const [restaurantInfo, setRestaurantInfo] = useState<RestaurantInfo>();

  useEffect(() => {
    if (!restaurantId) {
      return;
    }

    setRestaurantInfo(undefined);
    restuarantsGateway.getRestaurant(restaurantId).then(setRestaurantInfo);
  }, [restaurantId]);

  return {restaurantInfo};
};

export {useRestaurantFetcher};
