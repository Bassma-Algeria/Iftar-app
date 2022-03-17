import React from 'react';
import {View} from 'react-native';

import {styles} from './Map.style';

import type {HomeStackScreenProps} from '../../HomeStack.types';

import {MapView} from './_components_/MapView/MapView';

interface Props extends HomeStackScreenProps<'Map'> {}

const Map: React.FC<Props> = () => {
  return (
    <View style={styles.container}>
      <MapView />
    </View>
  );
};

export {Map};
