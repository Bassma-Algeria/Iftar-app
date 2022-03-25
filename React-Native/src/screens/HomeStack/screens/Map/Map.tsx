import React from 'react';
import {View} from 'react-native';

import {styles} from './Map.style';

import type {HomeStackScreenProps} from '../../HomeStack.types';

import {DiscoverModeContextProvider} from './_context_/DiscoverModeContextProvider';

import {MapView} from './_components_/MapView/MapView';
import {RestaurantPopup} from './_components_/RestaurantPopup/RestaurantPopup';
import {TopBar} from './_components_/TopBar/TopBar';
import {AddRestaurant} from './_components_/AddRestaurant/AddRestaurant';
import {MapContextProvider} from './_context_/MapContextProvider';
import {ChooseLocationModeContextProvider} from './_context_/ChooseLocationModeContextProvider';

interface Props extends HomeStackScreenProps<'Map'> {}

const Map: React.FC<Props> = () => {
  return (
    <MapContextProvider>
      <DiscoverModeContextProvider>
        <ChooseLocationModeContextProvider>
          <View style={styles.container}>
            <TopBar />
            <MapView />
            <RestaurantPopup />
            <AddRestaurant />
          </View>
        </ChooseLocationModeContextProvider>
      </DiscoverModeContextProvider>
    </MapContextProvider>
  );
};

export {Map};
