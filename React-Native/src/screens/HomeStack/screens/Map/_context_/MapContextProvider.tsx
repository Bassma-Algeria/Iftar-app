import React, {createContext, useState} from 'react';
import type {LocationCords} from '../../../../../@types/LocationCords';

interface MapContextValues {
  selectedRestaurantId?: string;
  setSelectedRestaurantId: React.Dispatch<
    React.SetStateAction<string | undefined>
  >;

  destinationCoords?: LocationCords;
  setDestinationCoords: React.Dispatch<
    React.SetStateAction<LocationCords | undefined>
  >;
}

export const MapContext = createContext<MapContextValues | undefined>(
  undefined,
);

const MapContextProvider: React.FC = ({children}) => {
  const [selectedRestaurantId, setSelectedRestaurantId] = useState<string>();
  const [destinationCoords, setDestinationCoords] = useState<LocationCords>();

  return (
    <MapContext.Provider
      value={{
        selectedRestaurantId,
        setSelectedRestaurantId,
        destinationCoords,
        setDestinationCoords,
      }}>
      {children}
    </MapContext.Provider>
  );
};

export {MapContextProvider};
