import React from 'react';
import {Pressable} from 'react-native';

import {styles} from '../AddRestaurantForm.style';

import {ICONS} from '../../../../../../../utils/constants/Icons';

import {useAddRestaurantFormContext} from '../_hooks_/useAddRestaurantFormContext';
import {useMapContext} from '../../../_hooks_/useMapContext';
import {
  OnConfirmArgs,
  useChoosingLocationState,
} from '../../../../../_hooks_/useChoosingLocationState';

import {Input} from '../../../../../../../components/Inputs/TextInput/Input';

const LocationInput = () => {
  const {restaurantInfo, setRestaurantInfo} = useAddRestaurantFormContext();
  const {setUsageMode, setIsAddRestaurantFormOpen} = useMapContext();
  const {onConfirm} = useChoosingLocationState();

  const handlePress = () => {
    setUsageMode('chooseLocation');
    setIsAddRestaurantFormOpen(false);
    onConfirm.set(() => ({coordinates: locationCoords, name: locationName}: OnConfirmArgs) => {
      setRestaurantInfo({...restaurantInfo, locationCoords, locationName});
      setIsAddRestaurantFormOpen(true);
    });
  };

  return (
    <Pressable onPress={handlePress}>
      <Input
        icon={ICONS.locationFilled}
        placeholder="الموقع"
        style={styles.input}
        value={restaurantInfo.locationName}
        onTextChange={() => {}}
        disable
      />
    </Pressable>
  );
};

export {LocationInput};
