import React from 'react';
import {View} from 'react-native';

import {styles} from './Map.style';

import type {HomeStackScreenProps} from '../../HomeStack.types';

import {MapView} from './_components_/MapView/MapView';
import {RestaurantPopup} from './_components_/RestaurantPopup/RestaurantPopup';

import {RESTAURANTS} from '../../../../Gateways/RestaurantsGateway/Fake/RESTAURANTS';

interface Props extends HomeStackScreenProps<'Map'> {}

const Map: React.FC<Props> = () => {
  return (
    <View style={styles.container}>
      <MapView />
      <RestaurantPopup {...RESTAURANTS[0]} />
    </View>
  );
};

export {Map};
