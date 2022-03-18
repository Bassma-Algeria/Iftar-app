import React from 'react';
import {Animated, View} from 'react-native';

import {styles} from '../../Map.style';

import type {RestaurantInfo} from '../../../../../../Gateways/RestaurantsGateway/RestaurantsGateway.interface';

import {ICONS} from '../../../../../../utils/constants/Icons';

import {usePopupAnimation} from './_hooks_/usePopupAnimation';
import {useMapContext} from '../../_hooks_/useMapContext';
import {useRestaurantFetcher} from './_hooks_/useRestaurantFetcher';

import {Header} from '../../../../../../components/Header/Header';
import {Button} from '../../../../../../components/Button/Button';
import {Loader as DefaultLoader} from '../../../../../../components/Loader/Loader';
import {RestaurantPics} from './_components_/RestaurantPics';
import {RestaurantInfoItems} from './_components_/RestaurantInfoItems';

const RestaurantPopup: React.FC = () => {
  const {selectedRestaurantId} = useMapContext();

  const {translateY} = usePopupAnimation(selectedRestaurantId);
  const {restaurantInfo} = useRestaurantFetcher(selectedRestaurantId);

  return (
    <Animated.View
      style={[styles.restaurantPopupContainer, {transform: [{translateY}]}]}>
      <View style={styles.popupTopBar} />

      {!restaurantInfo ? (
        <Loader />
      ) : (
        <RestaurantInfoView {...restaurantInfo} />
      )}
    </Animated.View>
  );
};

const Loader = () => {
  return <DefaultLoader style={styles.loader} color="brown" size={50} />;
};

const RestaurantInfoView: React.FC<RestaurantInfo> = props => {
  return (
    <>
      <Header variant="h3" fontWeight="bold" style={styles.restaurantTitle}>
        {props.name}
      </Header>

      <RestaurantPics pictures={props.pictures} />

      <View style={styles.restaurantDetails}>
        <RestaurantInfoItems {...props} />

        <Button label="أظهر الطريق" icon={ICONS.leftArrow} />
      </View>
    </>
  );
};

export {RestaurantPopup};
