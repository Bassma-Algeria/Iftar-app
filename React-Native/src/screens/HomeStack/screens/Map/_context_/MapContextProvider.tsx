import React, {createContext, useRef, useState} from 'react';
import GoogleMapView from 'react-native-maps';

import type {LocationCords} from '../../../../../@types/LocationCords';
import type {RestaurantInfo} from '../../../../../Gateways/RestaurantsGateway/RestaurantsGateway.interface';

interface MapContextValues {
  selectedRestaurant?: RestaurantInfo;
  setSelectedRestaurant: React.Dispatch<React.SetStateAction<RestaurantInfo | undefined>>;

  destinationLocation?: LocationCords;
  setDestinationLocation: React.Dispatch<React.SetStateAction<LocationCords | undefined>>;

  mapRef: React.RefObject<GoogleMapView>;
}

export const MapContext = createContext<MapContextValues | undefined>(undefined);

const MapContextProvider: React.FC = ({children}) => {
  const [selectedRestaurant, setSelectedRestaurant] = useState<RestaurantInfo>();
  const [destinationLocation, setDestinationLocation] = useState<LocationCords>();
  const mapRef = useRef<GoogleMapView>(null);

  return (
    <MapContext.Provider
      value={{
        selectedRestaurant,
        setSelectedRestaurant,
        destinationLocation,
        setDestinationLocation,
        mapRef,
      }}>
      {children}
    </MapContext.Provider>
  );
};

export {MapContextProvider};
