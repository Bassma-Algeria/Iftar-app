import {useRoute} from '@react-navigation/native';
import React, {useEffect} from 'react';

import {HomeStackScreenProps} from '../../../../HomeStack.types';

import {useMapContext} from '../../_hooks_/useMapContext';
import {ChooseLocationMessage} from './_components_/ChooseLocationMessage';

import {ConfirmButton} from './_components_/ConfirmButton';

const ChooseLocationMode: React.FC = () => {
  const routes = useRoute<HomeStackScreenProps<'Map'>['route']>();
  const {usageMode, setUsageMode} = useMapContext();

  useEffect(() => {
    if (routes.params?.usageMode) {
      setUsageMode(routes.params?.usageMode);
    }
  }, [routes, setUsageMode]);

  return usageMode === 'chooseLocation' ? (
    <>
      <ChooseLocationMessage />
      <ConfirmButton />
    </>
  ) : null;
};

export {ChooseLocationMode};
