import React from 'react';

import {styles} from '../../../AddRestaurant.style';

import {ICONS} from '../../../../../../../../../utils/constants/Icons';

import {useAddRestaurantContext} from '../../../_hooks_/useAddRestaurantContext';

import {Input} from '../../../../../../../../../components/Inputs/TextInput/Input';

const RestaurantAndOwnerNameInputs = () => {
  const {restaurantInfo, setRestaurantInfo} = useAddRestaurantContext();

  return (
    <>
      <Input
        placeholder="اسم مالك المطعم"
        style={styles.input}
        icon={ICONS.profilePrimary}
        value={restaurantInfo.ownerName}
        onTextChange={t => setRestaurantInfo({...restaurantInfo, ownerName: t})}
      />
      <Input
        placeholder="اسم المطعم"
        style={styles.input}
        icon={ICONS.edit}
        value={restaurantInfo.name}
        onTextChange={t => setRestaurantInfo({...restaurantInfo, name: t})}
      />
    </>
  );
};

export {RestaurantAndOwnerNameInputs};
