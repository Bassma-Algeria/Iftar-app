import {useContext} from 'react';

import {ProfileContext} from '../_context_/ProfileContextProvider';

const useProfileContext = () => {
  const values = useContext(ProfileContext);

  if (!values) {
    throw new Error('The component should be wrapped with ProfileContextProvider');
  }

  return values;
};

export {useProfileContext};
