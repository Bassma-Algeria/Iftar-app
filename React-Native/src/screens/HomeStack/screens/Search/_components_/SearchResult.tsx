import React, {useLayoutEffect, useState} from 'react';
import {FlatList, Image, TouchableOpacity, View} from 'react-native';

import {styles} from '../Search.style';

import type {RestaurantInfo} from '../../../../../Gateways/RestaurantsGateway/RestaurantsGateway.interface';
import {restuarantsGateway} from '../../../../../Gateways';

import {ICONS} from '../../../../../utils/constants/Icons';
import {IMAGES} from '../../../../../utils/constants/Images';
import {showToast} from '../../../../../utils/helpers/showToast';

import {Header} from '../../../../../components/Header/Header';
import {Loader} from '../../../../../components/Loader/Loader';
import {useNavigation} from '@react-navigation/native';
import {HomeStackScreenProps} from '../../../HomeStack.types';

interface Props {
  searchValue: string;
}

const SearchResult: React.FC<Props> = ({searchValue}) => {
  const [restaurants, setRestaurants] = useState<RestaurantInfo[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useLayoutEffect(() => {
    if (!searchValue) {
      setRestaurants([]);
      setIsLoading(false);
      return;
    }

    setIsLoading(true);
    restuarantsGateway
      .searchFor(searchValue)
      .then(setRestaurants)
      .catch(() => showToast('يرجى التحقق من اتصالك بالإنترنت'))
      .finally(() => setIsLoading(false));
  }, [searchValue]);

  return (
    <View style={styles.searchResultContainer}>
      {searchValue ? (
        isLoading ? (
          <Loader size={40} color={'brown'} />
        ) : (
          <Result restaurants={restaurants} />
        )
      ) : null}
    </View>
  );
};

const Result: React.FC<{restaurants: RestaurantInfo[]}> = ({restaurants}) => {
  return !restaurants.length ? (
    <Header align="center">لا يوجد مطعم بهذا الاسم</Header>
  ) : (
    <FlatList
      data={restaurants}
      renderItem={({item}) => <RestaurantItem {...item} />}
      keyExtractor={({restaurantId}) => restaurantId}
    />
  );
};

const RestaurantItem: React.FC<RestaurantInfo> = props => {
  const navigation = useNavigation<HomeStackScreenProps<'Search'>['navigation']>();

  const handlePress = () => navigation.navigate('Map', {selectedRestaurant: props});

  return (
    <TouchableOpacity style={styles.restaurant} activeOpacity={0.8} onPress={handlePress}>
      <View style={styles.restaurantInfo}>
        <Header variant="h4" fontWeight="bold">
          {props.name}
        </Header>

        <View style={styles.locationContainer}>
          <Header>{props.locationName}</Header>

          <View style={styles.locationIconContainer}>
            <Image source={ICONS.location} style={styles.locationIcon} resizeMode="contain" />
          </View>
        </View>
      </View>

      <View style={styles.restaurantImageContainer}>
        <RestaurantPicture uri={props.pictures[0]} />
      </View>
    </TouchableOpacity>
  );
};

const RestaurantPicture: React.FC<{uri: string}> = ({uri}) => {
  return uri ? (
    <Image source={{uri}} style={styles.restaurantImage} resizeMode="cover" />
  ) : (
    <Image source={IMAGES.noImage} style={styles.noRestaurantImage} resizeMode="contain" />
  );
};

export {SearchResult};
