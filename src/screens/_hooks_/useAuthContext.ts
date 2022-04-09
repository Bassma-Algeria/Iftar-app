import {useContext} from 'react';

import {AuthContext} from '../_context_/AuthContextProvider';

const useAuthContext = () => {
  const values = useContext(AuthContext);

  if (!values) {
    throw new Error('The component should be wrapped with AuthContextProvider');
  }

  return values;
};

export {useAuthContext};
