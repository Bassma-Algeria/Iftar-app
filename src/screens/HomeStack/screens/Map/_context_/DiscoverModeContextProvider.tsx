import React, {createContext, useState} from 'react';

import type {RestaurantInMap} from '../../../../../Gateways/RestaurantsGateway/RestaurantsGateway.interface';

interface DiscoverModeContextValues {
  selectedRestaurant?: RestaurantInMap;
  setSelectedRestaurant: React.Dispatch<React.SetStateAction<RestaurantInMap | undefined>>;
}

export const DiscoverModeContext = createContext<DiscoverModeContextValues | undefined>(undefined);

const DiscoverModeContextProvider: React.FC = ({children}) => {
  const [selectedRestaurant, setSelectedRestaurant] = useState<RestaurantInMap>();

  return (
    <DiscoverModeContext.Provider
      value={{
        selectedRestaurant,
        setSelectedRestaurant,
      }}>
      {children}
    </DiscoverModeContext.Provider>
  );
};

export {DiscoverModeContextProvider};
