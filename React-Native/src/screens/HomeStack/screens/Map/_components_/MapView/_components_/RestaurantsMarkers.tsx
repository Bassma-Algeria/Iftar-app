import React, {useEffect, useState} from 'react';
import {Image} from 'react-native';
import {Marker} from 'react-native-maps';

import {styles} from '../../../Map.style';

import {restuarantsGateway} from '../../../../../../../Gateways';
import type {RestaurantInfo} from '../../../../../../../Gateways/RestaurantsGateway/RestaurantsGateway.interface';

import {ICONS} from '../../../../../../../utils/constants/Icons';

import {useMapContext} from '../../../_hooks_/useMapContext';

import {Header} from '../../../../../../../components/Header/Header';

const RestaurantsMarkers: React.FC = () => {
  const [restaurants, setRestaurants] = useState<RestaurantInfo[]>();

  useEffect(() => {
    restuarantsGateway.getRestaurants().then(setRestaurants);
  }, []);

  return (
    <>
      {restaurants?.map(info => (
        <RestaurantMarker {...info} key={info.restaurantId} />
      ))}
    </>
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

export {RestaurantsMarkers};
