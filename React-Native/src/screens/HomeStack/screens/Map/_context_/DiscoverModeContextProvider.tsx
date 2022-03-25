import React, {createContext, useState} from 'react';

import type {LocationCords} from '../../../../../@types/LocationCords';
import type {RestaurantInfo} from '../../../../../Gateways/RestaurantsGateway/RestaurantsGateway.interface';

interface DiscoverModeContextValues {
  selectedRestaurant?: RestaurantInfo;
  setSelectedRestaurant: React.Dispatch<React.SetStateAction<RestaurantInfo | undefined>>;

  destinationLocation?: LocationCords;
  setDestinationLocation: React.Dispatch<React.SetStateAction<LocationCords | undefined>>;
}

export const DiscoverModeContext = createContext<DiscoverModeContextValues | undefined>(undefined);

const DiscoverModeContextProvider: React.FC = ({children}) => {
  const [selectedRestaurant, setSelectedRestaurant] = useState<RestaurantInfo>();
  const [destinationLocation, setDestinationLocation] = useState<LocationCords>();

  return (
    <DiscoverModeContext.Provider
      value={{
        selectedRestaurant,
        setSelectedRestaurant,
        destinationLocation,
        setDestinationLocation,
      }}>
      {children}
    </DiscoverModeContext.Provider>
  );
};

export {DiscoverModeContextProvider};
