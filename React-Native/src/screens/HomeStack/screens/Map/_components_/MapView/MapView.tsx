import React from 'react';
import {View} from 'react-native';
import GoogleMapView from 'react-native-maps';

import {mapStyle, styles} from '../../Map.style';

import type {LocationCords} from '../../../../../../@types/LocationCords';

import {useLocation} from './_hooks_/useLocation';

import {Header} from '../../../../../../components/Header/Header';
import {RestaurantsMarkers} from './_components_/RestaurantsMarkers';
import {PathToRestaurant} from './_components_/PathToRestaurant/PathToRestaurant';
import {MyPositionMarker} from './_components_/MyPositionMarker';

const MapView: React.FC = () => {
  const {currentLocation, error} = useLocation();

  return !currentLocation ? (
    <LoadingMessage error={error} />
  ) : (
    <Map initialLocation={currentLocation} />
  );
};

const LoadingMessage: React.FC<{error?: string}> = ({error}) => {
  return (
    <View style={styles.mapLoadingMessage}>
      {error ? (
        <Header variant="h5" fontWeight="bold" align="center">
          يرجى التحقق من الاتصال بالإنترنت ، والمحاول مرة أخرى
        </Header>
      ) : (
        <Header variant="h5" fontWeight="bold" align="center">
          نحاول الحصول على موقعك ، يرجى الانتظار ...
        </Header>
      )}
    </View>
  );
};

interface MapProps {
  initialLocation: LocationCords;
}

const Map: React.FC<MapProps> = ({initialLocation}) => {
  return (
    <GoogleMapView
      customMapStyle={mapStyle}
      style={styles.map}
      initialRegion={{...initialLocation, latitudeDelta: 0.08, longitudeDelta: 0.03}}>
      <MyPositionMarker coordinates={initialLocation} />

      <PathToRestaurant currentLocation={initialLocation} />
      <RestaurantsMarkers />
    </GoogleMapView>
  );
};

export {MapView};
