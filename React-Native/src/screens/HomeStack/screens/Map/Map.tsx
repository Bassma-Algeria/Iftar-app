import React from 'react';
import {View} from 'react-native';

import {styles} from './Map.style';

import type {HomeStackScreenProps} from '../../HomeStack.types';

import {DiscoverModeContextProvider} from './_context_/DiscoverModeContextProvider';
import {MapContextProvider} from './_context_/MapContextProvider';
import {ChooseLocationModeContextProvider} from './_context_/ChooseLocationModeContextProvider';

import {MapView} from './_components_/MapView/MapView';
import {DiscoverMode} from './_components_/DiscoverMode/DiscoverMode';
import {ChooseLocationMode} from './_components_/ChooseLocationMode/ChooseLocationMode';
import {AddRestaurantFormPopup} from './_components_/AddRestaurantForm/AddRestaurantForm';

interface Props extends HomeStackScreenProps<'Map'> {}

const Map: React.FC<Props> = () => {
  return (
    <MapContextProvider>
      <DiscoverModeContextProvider>
        <ChooseLocationModeContextProvider>
          <View style={styles.container}>
            <MapView />
            <AddRestaurantFormPopup />

            <DiscoverMode />
            <ChooseLocationMode />
          </View>
        </ChooseLocationModeContextProvider>
      </DiscoverModeContextProvider>
    </MapContextProvider>
  );
};

export {Map};
