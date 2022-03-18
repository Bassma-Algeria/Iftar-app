import React from 'react';
import {Animated, View} from 'react-native';

import {styles} from '../../Map.style';

import type {RestaurantInfo} from '../../../../../../Gateways/RestaurantsGateway/RestaurantsGateway.interface';

import {ICONS} from '../../../../../../utils/constants/Icons';

import {usePopupAnimation} from './_hooks_/usePopupAnimation';

import {Header} from '../../../../../../components/Header/Header';
import {Button} from '../../../../../../components/Button/Button';
import {RestaurantPics} from './_components_/RestaurantPics';
import {RestaurantInfoItems} from './_components_/RestaurantInfoItems';

const RestaurantPopup: React.FC<RestaurantInfo> = props => {
  const {translateY} = usePopupAnimation();

  return (
    <Animated.View
      style={[styles.restaurantPopupContainer, {transform: [{translateY}]}]}>
      <View style={styles.popupTopBar} />

      <Header variant="h3" fontWeight="bold" style={styles.restaurantTitle}>
        {props.name}
      </Header>

      <RestaurantPics pictures={props.pictures} />

      <View style={styles.restaurantDetails}>
        <RestaurantInfoItems {...props} />

        <Button label="أظهر الطريق" icon={ICONS.leftArrow} />
      </View>
    </Animated.View>
  );
};

export {RestaurantPopup};
