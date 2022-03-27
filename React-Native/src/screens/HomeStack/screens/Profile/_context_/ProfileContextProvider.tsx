import React, {createContext, useState} from 'react';

import type {RestaurantInfo} from '../../../../../Gateways/RestaurantsGateway/RestaurantsGateway.interface';

interface ProfileContextValues {
  restaurantToEdit?: RestaurantInfo;
  setRestaurantToEdit: React.Dispatch<React.SetStateAction<RestaurantInfo | undefined>>;
}

const ProfileContext = createContext<ProfileContextValues | undefined>(undefined);

const initialEditRestaurantFormState = {
  name: '',
  ownerName: '',
  pictures: [],
  closingTime: {hour: 0, minut: 0},
  openingTime: {hour: 0, minut: 0},
  locationCoords: undefined,
  locationName: '',
};

const ProfileContextProvider: React.FC = ({children}) => {
  const [restaurantToEdit, setRestaurantToEdit] = useState<RestaurantInfo>();

  return (
    <ProfileContext.Provider
      value={{
        restaurantToEdit,
        setRestaurantToEdit,
      }}>
      {children}
    </ProfileContext.Provider>
  );
};

export {ProfileContextProvider, ProfileContext, initialEditRestaurantFormState};
