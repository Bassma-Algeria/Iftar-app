import React from 'react';
import {Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {styles} from '../../../Profile.style';

import {ICONS} from '../../../../../../../utils/constants/Icons';

import type {HomeStackScreenProps} from '../../../../../HomeStack.types';

import {useEditRestaurantFormContext} from '../_hooks_/useEditRestaurantFormContext';
import {
  OnConfirmArgs,
  useChoosingLocationState,
} from '../../../../../_hooks_/useChoosingLocationState';

import {Input} from '../../../../../../../components/Inputs/TextInput/Input';

const LocationInput = () => {
  const navigation = useNavigation<HomeStackScreenProps<'Profile'>['navigation']>();

  const {onConfirm} = useChoosingLocationState();
  const {restaurantInfo, setRestaurantInfo} = useEditRestaurantFormContext();

  const handlePress = () => {
    navigation.push('Map', {usageMode: 'chooseLocation'});
    onConfirm.set(() => ({coordinates: locationCoords, name: locationName}: OnConfirmArgs) => {
      navigation.pop();
      setRestaurantInfo({...restaurantInfo, locationCoords, locationName});
    });
  };

  return (
    <Pressable onPress={handlePress}>
      <Input
        placeholder="الموقع"
        style={styles.popupInput}
        value={restaurantInfo.locationName}
        onTextChange={() => {}}
        backgroundColor="beige"
        icon={ICONS.locationFilled}
        disable
      />
    </Pressable>
  );
};

export {LocationInput};
