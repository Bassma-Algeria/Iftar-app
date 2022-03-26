import React, {createContext, useState} from 'react';
import type {RestaurantInfoToAdd} from '../../../../../../../Gateways/RestaurantsGateway/RestaurantsGateway.interface';

interface AddRestaurantContextValues {
  restaurantInfo: RestaurantInfoToAdd;
  setRestaurantInfo: React.Dispatch<React.SetStateAction<RestaurantInfoToAdd>>;

  serverError: boolean;
  setServerError: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddRestaurantFormContext = createContext<AddRestaurantContextValues | undefined>(undefined);

const initialAddRestaurantFormState = {
  name: '',
  ownerName: '',
  pictures: [],
  closingTime: {hour: 0, minut: 0},
  openingTime: {hour: 0, minut: 0},
  locationCoords: undefined,
  locationName: '',
};

const AddRestaurantFormContextProvider: React.FC = ({children}) => {
  const [serverError, setServerError] = useState<boolean>(false);
  const [restaurantInfo, setRestaurantInfo] = useState<RestaurantInfoToAdd>(
    initialAddRestaurantFormState,
  );

  return (
    <AddRestaurantFormContext.Provider
      value={{
        restaurantInfo,
        setRestaurantInfo,
        serverError,
        setServerError,
      }}>
      {children}
    </AddRestaurantFormContext.Provider>
  );
};

export {AddRestaurantFormContextProvider, AddRestaurantFormContext, initialAddRestaurantFormState};
