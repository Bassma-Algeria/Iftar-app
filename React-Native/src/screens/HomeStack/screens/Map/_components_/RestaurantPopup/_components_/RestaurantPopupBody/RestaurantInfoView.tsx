import {View} from 'react-native';
import React from 'react';

import {styles} from '../../RestaurantPopup.style';

import type {RestaurantInfo} from '../../../../../../../../Gateways/RestaurantsGateway/RestaurantsGateway.interface';

import {ICONS} from '../../../../../../../../utils/constants/Icons';

import {useDiscoverModeContext} from '../../../../_hooks_/useDiscoverModeContext';

import {Button} from '../../../../../../../../components/Button/Button';
import {Header} from '../../../../../../../../components/Header/Header';
import {RestaurantPics} from './_components_/RestaurantPics';
import {RestaurantInfoItems} from './_components_/RestaurantInfoItems';

const RestaurantInfoView: React.FC<RestaurantInfo> = props => {
  const {setDestinationLocation, setSelectedRestaurant} = useDiscoverModeContext();

  const handleDirectionButtonClick = () => {
    setSelectedRestaurant(undefined);
    setDestinationLocation(props.locationCoords);
  };

  return (
    <>
      <Header variant="h3" fontWeight="bold" style={styles.restaurantTitle}>
        {props.name}
      </Header>

      <RestaurantPics pictures={props.pictures} />

      <View style={styles.restaurantDetails}>
        <RestaurantInfoItems {...props} />

        <Button icon={ICONS.leftArrow} onPress={handleDirectionButtonClick}>
          أظهر الطريق
        </Button>
      </View>
    </>
  );
};

export {RestaurantInfoView};
