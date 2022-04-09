import {useContext} from 'react';

import {EditRestaurantFormContext} from '../_context_/EditRestaurantFormContextProvider';

const useEditRestaurantFormContext = () => {
  const values = useContext(EditRestaurantFormContext);

  if (!values) {
    throw new Error('The component should be wrapped with AddRestaurantFormContextProvider');
  }

  return values;
};

export {useEditRestaurantFormContext};
