import React, {createContext, useState} from 'react';

import type {RestaurantInfo} from '../../../../../Gateways/RestaurantsGateway/RestaurantsGateway.interface';

interface DiscoverModeContextValues {
  selectedRestaurant?: RestaurantInfo;
  setSelectedRestaurant: React.Dispatch<React.SetStateAction<RestaurantInfo | undefined>>;
}

export const DiscoverModeContext = createContext<DiscoverModeContextValues | undefined>(undefined);

const DiscoverModeContextProvider: React.FC = ({children}) => {
  const [selectedRestaurant, setSelectedRestaurant] = useState<RestaurantInfo>();

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
