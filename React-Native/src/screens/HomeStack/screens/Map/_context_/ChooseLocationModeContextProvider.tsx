import React, {createContext, useState} from 'react';

import type {LocationCords} from '../../../../../@types/LocationCords';

type OnConfirmFunction = (selectedLocation: LocationCords) => void;

interface ChooseLocationModeContextValues {
  selectedLocation?: LocationCords;
  setSelectedLocation: React.Dispatch<React.SetStateAction<LocationCords | undefined>>;

  onConfirm?: OnConfirmFunction;
  setOnConfirm: React.Dispatch<React.SetStateAction<OnConfirmFunction | undefined>>;
}

export const ChooseLocationModeContext = createContext<ChooseLocationModeContextValues | undefined>(
  undefined,
);

const ChooseLocationModeContextProvider: React.FC = ({children}) => {
  const [selectedLocation, setSelectedLocation] = useState<LocationCords>();
  const [onConfirm, setOnConfirm] = useState<OnConfirmFunction>();

  return (
    <ChooseLocationModeContext.Provider
      value={{selectedLocation, setSelectedLocation, onConfirm, setOnConfirm}}>
      {children}
    </ChooseLocationModeContext.Provider>
  );
};

export {ChooseLocationModeContextProvider};
