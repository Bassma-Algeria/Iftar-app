import React, {useEffect, useState} from 'react';
import {Image} from 'react-native';
import {Marker} from 'react-native-maps';

import {styles} from '../../../Map.style';

import {restuarantsGateway} from '../../../../../../../Gateways';
import type {RestaurantInMap} from '../../../../../../../Gateways/RestaurantsGateway/RestaurantsGateway.interface';

import {ICONS} from '../../../../../../../utils/constants/Icons';
import {showToast} from '../../../../../../../utils/helpers/showToast';

import {useDiscoverModeContext} from '../../../_hooks_/useDiscoverModeContext';

import {Header} from '../../../../../../../components/Header/Header';
import {useMapContext} from '../../../_hooks_/useMapContext';

const RestaurantsMarkers: React.FC = () => {
  const [restaurants, setRestaurants] = useState<RestaurantInMap[]>();
  const {isAddRestaurantFormOpen} = useMapContext();

  useEffect(() => {
    restuarantsGateway
      .getRestaurants()
      .then(setRestaurants)
      .catch(() => showToast('يرجى التحقق من اتصالك بالإنترنت'));
  }, [isAddRestaurantFormOpen]);

  return (
    <>
      {restaurants?.map(info => (
        <RestaurantMarker {...info} key={info.restaurantId} />
      ))}
    </>
  );
};

const RestaurantMarker: React.FC<RestaurantInMap> = restaurantInfo => {
  const {setSelectedRestaurant} = useDiscoverModeContext();

  return (
    <Marker
      coordinate={restaurantInfo.locationCoords}
      onPress={() => setSelectedRestaurant(restaurantInfo)}
      style={styles.markerContainer}>
      <Header fontWeight="semibold">{restaurantInfo.name}</Header>
      <Image source={ICONS.restaurantMarker} style={styles.pin} resizeMode="contain" />
    </Marker>
  );
};

export {RestaurantsMarkers};
