// import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import GoogleMapView, {Marker} from 'react-native-maps';
import {Image} from 'react-native';

import {mapStyle, styles} from '../../Map.style';

import {restuarantsGateway} from '../../../../../../Gateways';
import type {RestaurantInfo} from '../../../../../../Gateways/RestaurantsGateway/RestaurantsGateway.interface';

import {useLocation} from './_hooks_/useLocation';

import {ICONS} from '../../../../../../utils/constants/Icons';

import {Header} from '../../../../../../components/Header/Header';
import {useMapContext} from '../../_hooks_/useMapContext';

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
  initialLocation: {latitude: number; longitude: number};
}

// TODO: Add the loading while the restaurants are fetching
const Map: React.FC<MapProps> = ({initialLocation}) => {
  const [restaurants, setRestaurants] = useState<RestaurantInfo[]>();

  useEffect(() => {
    restuarantsGateway.getRestaurants().then(setRestaurants);
  }, []);

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
      {restaurants?.map(info => (
        <RestaurantMarker {...info} key={info.restaurantId} />
      ))}
    </GoogleMapView>
  );
};

const RestaurantMarker: React.FC<RestaurantInfo> = props => {
  const {setSelectedRestaurantId} = useMapContext();

  return (
    <Marker
      coordinate={props.location}
      style={styles.markerContainer}
      onPress={() => setSelectedRestaurantId(props.restaurantId)}>
      <Header fontWeight="semibold">{props.name}</Header>
      <Image source={ICONS.pin} style={styles.pin} resizeMode="contain" />
    </Marker>
  );
};

export {MapView};
