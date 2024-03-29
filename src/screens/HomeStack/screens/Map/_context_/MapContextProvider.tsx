import React, {createContext, useState, useRef} from 'react';
import GoogleMapView from 'react-native-maps';

import type {LocationCords} from '../../../../../@types/LocationCords';

export type UsageModes = 'discover' | 'chooseLocation' | 'direction';

interface MapContextValues {
  currentLocation?: LocationCords;
  setCurrentLocation: React.Dispatch<React.SetStateAction<LocationCords | undefined>>;

  usageMode: UsageModes;
  setUsageMode: React.Dispatch<React.SetStateAction<UsageModes>>;

  isAddRestaurantFormOpen: boolean;
  setIsAddRestaurantFormOpen: React.Dispatch<React.SetStateAction<boolean>>;

  mapRef: React.RefObject<GoogleMapView>;
}

export const MapContext = createContext<MapContextValues | undefined>(undefined);

const MapContextProvider: React.FC = ({children}) => {
  const [usageMode, setUsageMode] = useState<UsageModes>('discover');
  const [currentLocation, setCurrentLocation] = useState<LocationCords>();
  const [isAddRestaurantFormOpen, setIsAddRestaurantFormOpen] = useState<boolean>(false);

  const mapRef = useRef<GoogleMapView>(null);

  return (
    <MapContext.Provider
      value={{
        currentLocation,
        setCurrentLocation,
        usageMode,
        setUsageMode,
        isAddRestaurantFormOpen,
        setIsAddRestaurantFormOpen,
        mapRef,
      }}>
      {children}
    </MapContext.Provider>
  );
};

export {MapContextProvider};
