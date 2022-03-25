import React, {useEffect} from 'react';
import {View} from 'react-native';
import GoogleMapView from 'react-native-maps';

import {mapStyle, styles} from '../../Map.style';

import type {LocationCords} from '../../../../../../@types/LocationCords';

import {useLocation} from './_hooks_/useLocation';

import {Header} from '../../../../../../components/Header/Header';
import {RestaurantsMarkers} from './_components_/RestaurantsMarkers';
import {PathToRestaurant} from './_components_/PathToRestaurant/PathToRestaurant';
import {MyPositionMarker} from './_components_/MyPositionMarker';
import {useMapContext} from '../../_hooks_/useMapContext';
import {useRoute} from '@react-navigation/native';
import {HomeStackScreenProps} from '../../../../HomeStack.types';

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
  const routes = useRoute<HomeStackScreenProps<'Map'>['route']>();
  const {mapRef, setSelectedRestaurant} = useMapContext();

  useEffect(() => {
    const selectedRestaurant = routes.params?.selectedRestaurant;
    if (!selectedRestaurant) {
      return;
    }

    const {locationCoords} = selectedRestaurant;
    setTimeout(() => setSelectedRestaurant(selectedRestaurant), 1000);
    mapRef.current?.animateToRegion({...locationCoords, latitudeDelta, longitudeDelta}, 1000);
  }, [mapRef, routes.params, setSelectedRestaurant]);

  return (
    <GoogleMapView
      customMapStyle={mapStyle}
      ref={mapRef}
      style={styles.map}
      initialRegion={{...initialLocation, latitudeDelta, longitudeDelta}}>
      <MyPositionMarker coordinates={initialLocation} />

      <PathToRestaurant currentLocation={initialLocation} />
      <RestaurantsMarkers />
    </GoogleMapView>
  );
};

const latitudeDelta = 0.08;
const longitudeDelta = 0.03;

export {MapView};
