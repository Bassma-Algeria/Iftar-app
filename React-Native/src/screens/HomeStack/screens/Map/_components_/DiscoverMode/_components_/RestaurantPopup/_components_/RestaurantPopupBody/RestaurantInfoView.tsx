import {View} from 'react-native';
import React from 'react';

import type {RestaurantInfo} from '../../../../../../../../../../Gateways/RestaurantsGateway/RestaurantsGateway.interface';

import {styles} from '../../../../DiscoverMode.style';

import {ICONS} from '../../../../../../../../../../utils/constants/Icons';

import {useDiscoverModeContext} from '../../../../../../_hooks_/useDiscoverModeContext';
import {useDirectionModeContext} from '../../../../../../_hooks_/useDirectionModeContext';
import {useMapContext} from '../../../../../../_hooks_/useMapContext';

import {Button} from '../../../../../../../../../../components/Button/Button';
import {Header} from '../../../../../../../../../../components/Header/Header';
import {RestaurantPics} from './_components_/RestaurantPics';
import {RestaurantInfoItems} from './_components_/RestaurantInfoItems';

const RestaurantInfoView: React.FC<RestaurantInfo & {ownerNumber: string}> = props => {
  const {setSelectedRestaurant} = useDiscoverModeContext();
  const {setDestinationLocation} = useDirectionModeContext();
  const {setUsageMode} = useMapContext();

  const handleDirectionButtonClick = () => {
    setSelectedRestaurant(undefined);
    setDestinationLocation(props.locationCoords);
    setUsageMode('direction');
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
