import {useEffect, useState} from 'react';

import {restuarantsGateway} from '../../../../../../../../../Gateways';

import {RestaurantInfo} from '../../../../../../../../../Gateways/RestaurantsGateway/RestaurantsGateway.interface';

const useRestaurantInfoFetcher = (restaurantId: string | undefined) => {
  const [restaurantInfo, setRestaurantInfo] = useState<RestaurantInfo & {ownerNumber: string}>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    if (!restaurantId) {
      return;
    }

    setIsLoading(true);
    restuarantsGateway
      .getRestaurantInfo(restaurantId)
      .then(setRestaurantInfo)
      .catch(() => setRestaurantInfo(undefined))
      .finally(() => setIsLoading(false));
  }, [restaurantId]);

  return {isLoading, restaurantInfo};
};

export {useRestaurantInfoFetcher};
