import {useContext} from 'react';

import {RegistrationContext} from '../_context_/RegistrationContext';

const useRegistrationContext = () => {
  const values = useContext(RegistrationContext);

  if (!values) {
    throw new Error('The component should be wrapped with RegisterContextProvider');
  }

  return values;
};

export {useRegistrationContext};
