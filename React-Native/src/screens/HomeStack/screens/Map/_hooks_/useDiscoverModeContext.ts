import {useContext} from 'react';

import {DiscoverModeContext} from '../_context_/DiscoverModeContextProvider';

const useDiscoverModeContext = () => {
  const values = useContext(DiscoverModeContext);

  if (!values) {
    throw new Error('The component should be wrapped with MapContextProvider');
  }

  return values;
};

export {useDiscoverModeContext};
