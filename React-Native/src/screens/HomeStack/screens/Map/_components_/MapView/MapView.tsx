import React, {useEffect} from 'react';
import {View} from 'react-native';
import GoogleMapView, {MapEvent} from 'react-native-maps';
import {useRoute} from '@react-navigation/native';

import {mapStyle, styles} from '../../Map.style';

import type {LocationCords} from '../../../../../../@types/LocationCords';
import type {HomeStackScreenProps} from '../../../../HomeStack.types';

import {useLocation} from './_hooks_/useLocation';
import {useChoosingLocationState} from '../../../../_hooks_/useChoosingLocationState';
import {useDiscoverModeContext} from '../../_hooks_/useDiscoverModeContext';
import {useMapContext} from '../../_hooks_/useMapContext';

import {Header} from '../../../../../../components/Header/Header';
import {RestaurantsMarkers} from './_components_/RestaurantsMarkers';
import {PathToRestaurant} from './_components_/PathToRestaurant/PathToRestaurant';
import {MyPositionMarker} from './_components_/MyPositionMarker';
import {SelectedLocationMarker} from './_components_/SelectedLocationMarker';

const MapView: React.FC = () => {
  const {currentLocation, error} = useLocation();
  const {setCurrentLocation} = useMapContext();

  useEffect(() => {
    setCurrentLocation(currentLocation);
  }, [currentLocation, setCurrentLocation]);

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

  const {selectedLocation} = useChoosingLocationState();
  const {setSelectedRestaurant} = useDiscoverModeContext();
  const {mapRef, usageMode} = useMapContext();

  useEffect(() => {
    const selectedRestaurant = routes.params?.selectedRestaurant;
    if (!selectedRestaurant) {
      return;
    }

    const {locationCoords} = selectedRestaurant;
    setTimeout(() => setSelectedRestaurant(selectedRestaurant), 1000);
    mapRef.current?.animateToRegion({...locationCoords, latitudeDelta, longitudeDelta}, 1000);
  }, [mapRef, routes.params, setSelectedRestaurant]);

  const handlePress = (e: MapEvent) => {
    if (usageMode === 'chooseLocation') {
      selectedLocation.set(e.nativeEvent.coordinate);
    }
  };

  return (
    <GoogleMapView
      customMapStyle={mapStyle}
      ref={mapRef}
      style={styles.map}
      onPress={handlePress}
      initialRegion={{...initialLocation, latitudeDelta, longitudeDelta}}>
      <MyPositionMarker />

      <PathToRestaurant currentLocation={initialLocation} />
      <RestaurantsMarkers />

      <SelectedLocationMarker />
    </GoogleMapView>
  );
};

const latitudeDelta = 0.08;
const longitudeDelta = 0.03;

export {MapView};
