import React, {createContext, useState} from 'react';
import type {RestaurantInfoToAdd} from '../../../../../../../Gateways/RestaurantsGateway/RestaurantsGateway.interface';

interface IRestaurantForm extends Omit<RestaurantInfoToAdd, 'pictures'> {
  pictures: {uri: string; base64: string}[];
}

interface AddRestaurantContextValues {
  restaurantInfo: IRestaurantForm;
  setRestaurantInfo: React.Dispatch<React.SetStateAction<IRestaurantForm>>;

  serverError: boolean;
  setServerError: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddRestaurantFormContext = createContext<AddRestaurantContextValues | undefined>(undefined);

const initialAddRestaurantFormState: IRestaurantForm = {
  name: '',
  locationName: '',
  locationCoords: {latitude: 0, longitude: 0},
  workingTime: {opening: {hour: 0, minut: 0}, closing: {hour: 0, minut: 0}},
  pictures: [],
};

const AddRestaurantFormContextProvider: React.FC = ({children}) => {
  const [serverError, setServerError] = useState<boolean>(false);
  const [restaurantInfo, setRestaurantInfo] = useState<IRestaurantForm>(
    initialAddRestaurantFormState,
  );

  return (
    <AddRestaurantFormContext.Provider
      value={{restaurantInfo, setRestaurantInfo, serverError, setServerError}}>
      {children}
    </AddRestaurantFormContext.Provider>
  );
};

export {AddRestaurantFormContextProvider, AddRestaurantFormContext, initialAddRestaurantFormState};
