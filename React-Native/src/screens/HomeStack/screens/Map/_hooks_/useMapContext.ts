import {useContext} from 'react';

import {MapContext} from '../_context_/MapContextProvider';

const useMapContext = () => {
  const values = useContext(MapContext);

  if (!values) {
    throw new Error('The component should be wrapped with MapContextProvider');
  }

  return values;
};

export {useMapContext};
