import React from 'react';
import {View} from 'react-native';

import {useMapContext} from '../../_hooks_/useMapContext';

const ChooseLocationMode: React.FC = () => {
  const {usageMode} = useMapContext();

  return usageMode === 'chooseLocation' ? <View /> : null;
};

export {ChooseLocationMode};
