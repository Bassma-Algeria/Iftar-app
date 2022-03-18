import {View} from 'react-native';
import React from 'react';

import {styles} from '../../../../Map.style';

import type {RestaurantInfo} from '../../../../../../../../Gateways/RestaurantsGateway/RestaurantsGateway.interface';

import {ICONS} from '../../../../../../../../utils/constants/Icons';

import {useMapContext} from '../../../../_hooks_/useMapContext';
import {useRestaurantFetcher} from './_hooks_/useRestaurantFetcher';

import {Button} from '../../../../../../../../components/Button/Button';
import {Header} from '../../../../../../../../components/Header/Header';
import {Loader as DefaultLoader} from '../../../../../../../../components/Loader/Loader';
import {RestaurantPics} from './_components_/RestaurantPics';
import {RestaurantInfoItems} from './_components_/RestaurantInfoItems';

const RestaurantPopupBody = () => {
  const {selectedRestaurantId} = useMapContext();
  const {restaurantInfo} = useRestaurantFetcher(selectedRestaurantId);

  return !restaurantInfo ? (
    <Loader />
  ) : (
    <RestaurantInfoView {...restaurantInfo} />
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

export {RestaurantPopupBody};
