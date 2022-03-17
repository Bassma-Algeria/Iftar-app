import React from 'react';
import {View} from 'react-native';
import MapView from 'react-native-maps';

import {styles} from './Map.style';

import type {HomeStackScreenProps} from '../../HomeStack.types';

import {Header} from '../../../../components/Header/Header';

import {useLocation} from './_hooks_/useLocation';

interface Props extends HomeStackScreenProps<'Map'> {}

const Map: React.FC<Props> = () => {
  const {currentLocation, error} = useLocation();

  return (
    <View style={styles.container}>
      {!currentLocation ? (
        <Header>Trying to get your location, please wait...</Header>
      ) : (
        <MapView
          showsUserLocation
          initialRegion={{
            ...currentLocation,
            latitudeDelta: 0.08,
            longitudeDelta: 0.03,
          }}
          style={styles.map}
        />
      )}

      <Header>Map</Header>
    </View>
  );
};

export {Map};
