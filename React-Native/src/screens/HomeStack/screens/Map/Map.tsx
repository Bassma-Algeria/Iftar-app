import React from 'react';
import {View} from 'react-native';

import {styles} from './Map.style';

import type {HomeStackScreenProps} from '../../HomeStack.types';

import {MapContextProvider} from './_context_/MapContextProvider';

import {MapView} from './_components_/MapView/MapView';
import {RestaurantPopup} from './_components_/RestaurantPopup/RestaurantPopup';
import {TopBar} from './_components_/TopBar/TopBar';

interface Props extends HomeStackScreenProps<'Map'> {}

const Map: React.FC<Props> = () => {
  return (
    <MapContextProvider>
      <View style={styles.container}>
        <TopBar />
        <MapView />
        <RestaurantPopup />
      </View>
    </MapContextProvider>
  );
};

export {Map};
