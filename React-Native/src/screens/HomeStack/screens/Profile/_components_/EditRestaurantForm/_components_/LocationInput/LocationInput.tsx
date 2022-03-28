import React, {useEffect} from 'react';
import {Image, Pressable, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {styles} from '../../../../Profile.style';

import {ICONS} from '../../../../../../../../utils/constants/Icons';

import type {HomeStackScreenProps} from '../../../../../../HomeStack.types';
import type {LocationCords} from '../../../../../../../../@types/LocationCords';

import {useFromLocationCoordsToAdress} from '../../../../../../_hooks_/useFromLocationCoordsToAdress';
import {useEditRestaurantFormContext} from '../../_hooks_/useEditRestaurantFormContext';
import {useChoosingLocationState} from '../../../../../../_hooks_/useChoosingLocationState';

import {Input} from './_components_/Input';
import {Loader} from '../../../../../../../../components/Loader/Loader';

const LocationInput = () => {
  const navigation = useNavigation<HomeStackScreenProps<'Profile'>['navigation']>();

  const {onConfirm} = useChoosingLocationState();
  const {restaurantInfo, setRestaurantInfo} = useEditRestaurantFormContext();
  const {adress, isLoading} = useFromLocationCoordsToAdress(restaurantInfo.locationCoords);

  const handlePress = () => {
    navigation.push('Map', {usageMode: 'chooseLocation'});
    onConfirm.set(() => (locationCoords: LocationCords) => {
      navigation.pop();
      setRestaurantInfo({...restaurantInfo, locationCoords});
    });
  };

  useEffect(() => {
    if (adress) {
      setRestaurantInfo(info => ({...info, locationName: adress}));
    }
  }, [setRestaurantInfo, adress]);

  return (
    <Pressable onPress={handlePress}>
      <Input
        placeholder="الموقع"
        style={styles.popupInput}
        value={restaurantInfo.locationName}
        disable>
        {isLoading ? <Loader size={20} color="primary" /> : <LocationIcon />}
      </Input>
    </Pressable>
  );
};

const LocationIcon: React.FC = () => {
  return (
    <View style={styles.locationIconContainer}>
      <Image source={ICONS.locationFilled} style={styles.locationIcon} resizeMode="contain" />
    </View>
  );
};

export {LocationInput};
