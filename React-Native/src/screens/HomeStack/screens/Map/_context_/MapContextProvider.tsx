import React, {createContext, useState} from 'react';

interface MapContextValues {
  selectedRestaurantId?: string;
  setSelectedRestaurantId: React.Dispatch<
    React.SetStateAction<string | undefined>
  >;
}

export const MapContext = createContext<MapContextValues | undefined>(
  undefined,
);

const MapContextProvider: React.FC = ({children}) => {
  const [selectedRestaurantId, setSelectedRestaurantId] = useState<string>();

  return (
    <MapContext.Provider
      value={{selectedRestaurantId, setSelectedRestaurantId}}>
      {children}
    </MapContext.Provider>
  );
};

export {MapContextProvider};
