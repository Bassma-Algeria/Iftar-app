import React from 'react';
import {View} from 'react-native';

import {styles} from './Map.style';

import type {HomeStackScreenProps} from '../../HomeStack.types';

import {DiscoverModeContextProvider} from './_context_/DiscoverModeContextProvider';
import {MapContextProvider} from './_context_/MapContextProvider';

import {MapView} from './_components_/MapView/MapView';
import {DiscoverMode} from './_components_/DiscoverMode/DiscoverMode';
import {ChooseLocationMode} from './_components_/ChooseLocationMode/ChooseLocationMode';
import {AddRestaurantFormPopup} from './_components_/AddRestaurantForm/AddRestaurantForm';
import {DirectionModeContextProvider} from './_context_/DirectionModeContextProvider';
import {DirectionMode} from './_components_/DirectionMode/DirectionMode';

interface Props extends HomeStackScreenProps<'Map'> {}

const Map: React.FC<Props> = () => {
  return (
    <MapContextProvider>
      <DiscoverModeContextProvider>
        <DirectionModeContextProvider>
          <View style={styles.container}>
            <MapView />
            <AddRestaurantFormPopup />

            <DiscoverMode />
            <ChooseLocationMode />
            <DirectionMode />
          </View>
        </DirectionModeContextProvider>
      </DiscoverModeContextProvider>
    </MapContextProvider>
  );
};

export {Map};
