import React, {createContext, useLayoutEffect, useState} from 'react';

import {RestaurantInfo} from '../../../../../../../Gateways/RestaurantsGateway/RestaurantsGateway.interface';

interface IEditRestaurantForm extends Omit<RestaurantInfo, 'pictures'> {
  pictures: ({uri: string; base64: string} | string)[];
}

interface EditRestaurantContextValues {
  restaurantInfo: IEditRestaurantForm;
  setRestaurantInfo: React.Dispatch<React.SetStateAction<IEditRestaurantForm>>;
}

const EditRestaurantFormContext = createContext<EditRestaurantContextValues | undefined>(undefined);

const initialEditRestaurantFormState: IEditRestaurantForm = {
  ownerId: '',
  restaurantId: '',
  name: '',
  locationName: '',
  locationCoords: {latitude: 0, longitude: 0},
  workingTime: {opening: {hour: 0, minute: 0}, closing: {hour: 0, minute: 0}},
  pictures: [],
};

const EditRestaurantFormContextProvider: React.FC<{restaurant?: RestaurantInfo}> = ({
  children,
  restaurant,
}) => {
  const [restaurantInfo, setRestaurantInfo] = useState<IEditRestaurantForm>(
    initialEditRestaurantFormState,
  );

  useLayoutEffect(() => {
    if (restaurant) {
      setRestaurantInfo(restaurant);
    }
  }, [restaurant]);

  return (
    <EditRestaurantFormContext.Provider
      value={{
        restaurantInfo,
        setRestaurantInfo,
      }}>
      {children}
    </EditRestaurantFormContext.Provider>
  );
};

export {
  EditRestaurantFormContextProvider,
  EditRestaurantFormContext,
  initialEditRestaurantFormState,
};
