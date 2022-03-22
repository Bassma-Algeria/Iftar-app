import React, {createContext, useState} from 'react';

import type {LocationCords} from '../../../../../@types/LocationCords';
import type {RestaurantInfo} from '../../../../../Gateways/RestaurantsGateway/RestaurantsGateway.interface';

interface MapContextValues {
  selectedRestaurant?: RestaurantInfo;
  setSelectedRestaurant: React.Dispatch<React.SetStateAction<RestaurantInfo | undefined>>;

  destinationLocation?: LocationCords;
  setDestinationLocation: React.Dispatch<React.SetStateAction<LocationCords | undefined>>;
}

export const MapContext = createContext<MapContextValues | undefined>(undefined);

const MapContextProvider: React.FC = ({children}) => {
  const [selectedRestaurant, setSelectedRestaurant] = useState<RestaurantInfo>();
  const [destinationLocation, setDestinationLocation] = useState<LocationCords>();

  return (
    <MapContext.Provider
      value={{
        selectedRestaurant,
        setSelectedRestaurant,
        destinationLocation,
        setDestinationLocation,
      }}>
      {children}
    </MapContext.Provider>
  );
};

export {MapContextProvider};
