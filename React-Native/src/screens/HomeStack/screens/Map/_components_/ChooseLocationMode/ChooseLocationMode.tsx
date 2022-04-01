import {useRoute} from '@react-navigation/native';
import React, {useEffect} from 'react';

import type {HomeStackScreenProps} from '../../../../HomeStack.types';

import {useMapContext} from '../../_hooks_/useMapContext';

import {ChoosedLocationBanner} from './_components_/ChoosedLocationBanner';

const ChooseLocationMode: React.FC = () => {
  const routes = useRoute<HomeStackScreenProps<'Map'>['route']>();
  const {usageMode, setUsageMode} = useMapContext();

  useEffect(() => {
    if (routes.params?.usageMode) {
      setUsageMode(routes.params?.usageMode);
    }
  }, [routes, setUsageMode]);

  return usageMode === 'chooseLocation' ? <ChoosedLocationBanner /> : null;
};

export {ChooseLocationMode};
