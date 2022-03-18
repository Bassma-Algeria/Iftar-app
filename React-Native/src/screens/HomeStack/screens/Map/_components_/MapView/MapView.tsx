import React from 'react';
import GoogleMapView from 'react-native-maps';

import {mapStyle, styles} from '../../Map.style';

import type {LocationCords} from '../../../../../../@types/LocationCords';

import {useLocation} from './_hooks_/useLocation';

import {Header} from '../../../../../../components/Header/Header';
import {RestaurantsMarkers} from './_components_/RestaurantsMarkers';

const MapView: React.FC = () => {
  const {currentLocation, error} = useLocation();

  return !currentLocation ? (
    error ? (
      <Header>Error {error}</Header>
    ) : (
      <Header>Trying to get your location, please wait...</Header>
    )
  ) : (
    <Map initialLocation={currentLocation} />
  );
};

interface MapProps {
  initialLocation: LocationCords;
}

const Map: React.FC<MapProps> = ({initialLocation}) => {
  return (
    <GoogleMapView
      showsUserLocation
      customMapStyle={mapStyle}
      style={styles.map}
      initialRegion={{
        ...initialLocation,
        latitudeDelta: 0.08,
        longitudeDelta: 0.03,
      }}>
      <RestaurantsMarkers />
    </GoogleMapView>
  );
};

export {MapView};
