import React, {createContext, useLayoutEffect, useState} from 'react';

import {RestaurantInfo} from '../../../../../../../Gateways/RestaurantsGateway/RestaurantsGateway.interface';

interface EditRestaurantContextValues {
  restaurantInfo: RestaurantInfo;
  setRestaurantInfo: React.Dispatch<React.SetStateAction<RestaurantInfo>>;
}

const EditRestaurantFormContext = createContext<EditRestaurantContextValues | undefined>(undefined);

const initialEditRestaurantFormState: RestaurantInfo = {
  restaurantId: '',
  name: '',
  ownerName: '',
  openingTime: {hour: 0, minut: 0},
  closingTime: {hour: 0, minut: 0},
  pictures: [],
  ownerNumber: '',
  locationCoords: {latitude: 0, longitude: 0},
  locationName: '',
};

const EditRestaurantFormContextProvider: React.FC<{restaurant?: RestaurantInfo}> = ({
  children,
  restaurant,
}) => {
  const [restaurantInfo, setRestaurantInfo] = useState<RestaurantInfo>(
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

export {EditRestaurantFormContextProvider, EditRestaurantFormContext};
