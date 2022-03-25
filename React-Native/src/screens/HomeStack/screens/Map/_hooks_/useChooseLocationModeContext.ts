import {useContext} from 'react';

import {ChooseLocationModeContext} from '../_context_/ChooseLocationModeContextProvider';

const useChooseLocationModeContext = () => {
  const values = useContext(ChooseLocationModeContext);

  if (!values) {
    throw new Error('The component should be wrapped with MapContextProvider');
  }

  return values;
};

export {useChooseLocationModeContext};
