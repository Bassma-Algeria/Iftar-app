import React from 'react';
import {View} from 'react-native';
import MapView from 'react-native-maps';

import {styles} from './Map.style';

import {HomeStackScreenProps} from '../../HomeStack.types';

import {Header} from '../../../../components/Header/Header';

interface Props extends HomeStackScreenProps<'Map'> {}

const Map: React.FC<Props> = () => {
  return (
    <View style={styles.container}>
      <MapView showsUserLocation style={styles.map} />

      <Header>Map</Header>
    </View>
  );
};

export {Map};
