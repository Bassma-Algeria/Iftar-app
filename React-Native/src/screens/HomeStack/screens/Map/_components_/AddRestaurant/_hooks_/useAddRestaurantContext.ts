import {useContext} from 'react';

import {AddRestaurantFormContext} from '../_context_/AddRestaurantFormContextProvider';

const useAddRestaurantContext = () => {
  const values = useContext(AddRestaurantFormContext);

  if (!values) {
    throw new Error('The component should be wrapped with AddRestaurantFormContextProvider');
  }

  return values;
};

export {useAddRestaurantContext};
