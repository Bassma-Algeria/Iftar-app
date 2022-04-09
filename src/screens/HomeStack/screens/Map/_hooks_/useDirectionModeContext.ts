import {useContext} from 'react';

import {DirectionModeContext} from '../_context_/DirectionModeContextProvider';

const useDirectionModeContext = () => {
  const values = useContext(DirectionModeContext);

  if (!values) {
    throw new Error('The component should be wrapped with DirectionContextProvider');
  }

  return values;
};

export {useDirectionModeContext};
