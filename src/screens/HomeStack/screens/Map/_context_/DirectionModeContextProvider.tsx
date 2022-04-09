import React, {createContext, useState} from 'react';

import type {LocationCords} from '../../../../../@types/LocationCords';

interface DirectionModeContextValues {
  destinationLocation?: LocationCords;
  setDestinationLocation: React.Dispatch<React.SetStateAction<LocationCords | undefined>>;

  distance?: number;
  setDistance: React.Dispatch<React.SetStateAction<number | undefined>>;
}

export const DirectionModeContext = createContext<DirectionModeContextValues | undefined>(
  undefined,
);

const DirectionModeContextProvider: React.FC = ({children}) => {
  const [distance, setDistance] = useState<number>();
  const [destinationLocation, setDestinationLocation] = useState<LocationCords>();

  return (
    <DirectionModeContext.Provider
      value={{
        distance,
        setDistance,
        destinationLocation,
        setDestinationLocation,
      }}>
      {children}
    </DirectionModeContext.Provider>
  );
};

export {DirectionModeContextProvider};
