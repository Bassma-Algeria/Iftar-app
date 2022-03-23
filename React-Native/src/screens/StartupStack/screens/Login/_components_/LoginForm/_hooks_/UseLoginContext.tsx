import {useContext} from 'react';

import {LoginContext} from '../_context_/LoginContextProvider';

const useLoginContext = () => {
  const values = useContext(LoginContext);

  if (!values) {
    throw new Error('The component should be wrapped withLoginContextProvider');
  }

  return values;
};

export {useLoginContext};
