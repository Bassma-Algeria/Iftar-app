import React from 'react';

import {styles} from '../AddRestaurantForm.style';

import {ICONS} from '../../../../../../../utils/constants/Icons';

import {useAddRestaurantFormContext} from '../_hooks_/useAddRestaurantFormContext';

import {Input} from '../../../../../../../components/Inputs/TextInput/Input';

const RestaurantNameInput = () => {
  const {restaurantInfo, setRestaurantInfo} = useAddRestaurantFormContext();

  return (
    <Input
      placeholder="اسم المطعم"
      style={styles.input}
      icon={ICONS.edit}
      value={restaurantInfo.name}
      onTextChange={t => setRestaurantInfo({...restaurantInfo, name: t})}
    />
  );
};

export {RestaurantNameInput};
