import React, {useLayoutEffect, useState} from 'react';
import {Pressable, View} from 'react-native';

import {styles} from '../Profile.style';

import {ICONS} from '../../../../../utils/constants/Icons';

import type {RestaurantInfo} from '../../../../../Gateways/RestaurantsGateway/RestaurantsGateway.interface';
import {restuarantsGateway} from '../../../../../Gateways';

import {showToast} from '../../../../../utils/helpers/showToast';

import {useProfileContext} from '../_hooks_/useProfileContext';

import {ProfileItem} from './shared/ProfileItem';
import {Loader} from '../../../../../components/Loader/Loader';
import {Input} from '../../../../../components/Inputs/TextInput/Input';

import {Header} from '../../../../../components/Header/Header';

const RestaurantsList: React.FC = () => {
  return <ProfileItem title="قائمة المطاعم" icon={ICONS.list} Details={List} />;
};

const List: React.FC<{isExpanded: boolean}> = ({isExpanded}) => {
  const [restaurants, setRestaurants] = useState<RestaurantInfo[]>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useLayoutEffect(() => {
    if (isExpanded) {
      setIsLoading(true);
      restuarantsGateway
        .getRestaurantsOfAuthUser()
        .then(setRestaurants)
        .catch(() => showToast('يرجى التحقق من اتصالك بالإنترنت'))
        .finally(() => setIsLoading(false));
    }
  }, [isExpanded]);

  return (
    <View style={styles.restaurantsListContainer}>
      {isLoading ? (
        <Loader size={30} color="brown" />
      ) : restaurants ? (
        <Restaurants restaurants={restaurants} />
      ) : null}
    </View>
  );
};

const Restaurants: React.FC<{restaurants: RestaurantInfo[]}> = ({restaurants}) => {
  return (
    <>
      {!restaurants.length ? (
        <Header align="center" fontWeight="semibold">
          لا يوجد مطعم بعد
        </Header>
      ) : (
        restaurants.map(restaurant => <Restaurant {...restaurant} key={restaurant.restaurantId} />)
      )}
    </>
  );
};

const Restaurant: React.FC<RestaurantInfo> = info => {
  const {setRestaurantToEdit} = useProfileContext();

  return (
    <Pressable onPress={() => setRestaurantToEdit(info)}>
      <Input
        placeholder=""
        value={info.name}
        icon={ICONS.edit}
        style={styles.itemDetailsInput}
        onTextChange={() => {}}
        disable
      />
    </Pressable>
  );
};

export {RestaurantsList};
