import React from 'react';

import {styles} from '../../../AddRestaurant.style';

import {ICONS} from '../../../../../../../../../utils/constants/Icons';

import {useAddRestaurantContext} from '../../../_hooks_/useAddRestaurantContext';

import {Input} from '../../../../../../../../../components/Inputs/TextInput/Input';
import {Pressable} from 'react-native';

const LocationInput = () => {
  const {restaurantInfo, setRestaurantInfo} = useAddRestaurantContext();

  const handlePress = () => {
    console.log('press');
  };

  return (
    <Pressable onPress={handlePress}>
      <Input
        placeholder="الموقع"
        style={styles.input}
        icon={ICONS.locationFilled}
        value={restaurantInfo.locationName}
        onTextChange={t => setRestaurantInfo({...restaurantInfo, locationName: t})}
        disable
      />
    </Pressable>
  );
};

export {LocationInput};
