import React from 'react';
import {View} from 'react-native';

import {useMapContext} from '../../_hooks_/useMapContext';

const DiscoverMode: React.FC = () => {
  const {usageMode} = useMapContext();

  return usageMode === 'discover' ? <View /> : null;
};

export {DiscoverMode};
