import {useContext} from 'react';

import {RegisterContext} from '../_context_/RegisterContextProvider';

const useRegisterContext = () => {
  const values = useContext(RegisterContext);

  if (!values) {
    throw new Error('The component should be wrapped with RegisterContextProvider');
  }

  return values;
};

export {useRegisterContext};
