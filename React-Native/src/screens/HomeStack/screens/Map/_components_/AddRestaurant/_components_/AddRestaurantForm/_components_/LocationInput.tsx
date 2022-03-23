import React from 'react';

import {styles} from '../../../AddRestaurant.style';

import {ICONS} from '../../../../../../../../../utils/constants/Icons';

import {useAddRestaurantContext} from '../../../_hooks_/useAddRestaurantContext';

import {Input} from '../../../../../../../../../components/Inputs/TextInput/Input';

const LocationInput = () => {
  const {restaurantInfo, setRestaurantInfo} = useAddRestaurantContext();

  return (
    <Input
      placeholder="الموقع"
      style={styles.input}
      icon={ICONS.locationFilled}
      value={restaurantInfo.placeName}
      onTextChange={t => setRestaurantInfo({...restaurantInfo, placeName: t})}
    />
  );
};

export {LocationInput};
