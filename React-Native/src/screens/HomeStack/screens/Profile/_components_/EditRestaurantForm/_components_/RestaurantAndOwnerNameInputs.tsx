import React from 'react';

import {styles} from '../../../Profile.style';

import {ICONS} from '../../../../../../../utils/constants/Icons';

import {useEditRestaurantFormContext} from '../_hooks_/useEditRestaurantFormContext';

import {Input} from '../../../../../../../components/Inputs/TextInput/Input';
import {COLORS} from '../../../../../../../theme/Colors';

const RestaurantAndOwnerNameInputs = () => {
  const {restaurantInfo, setRestaurantInfo} = useEditRestaurantFormContext();

  return (
    <>
      <Input
        placeholder="اسم مالك المطعم"
        style={styles.popupInput}
        icon={ICONS.profilePrimary}
        value={restaurantInfo.ownerName}
        backgroundColor="beige"
        placeholderColor={COLORS.greyShade}
        onTextChange={t => setRestaurantInfo({...restaurantInfo, ownerName: t})}
      />
      <Input
        placeholder="اسم المطعم"
        style={styles.popupInput}
        icon={ICONS.edit}
        value={restaurantInfo.name}
        backgroundColor="beige"
        placeholderColor={COLORS.greyShade}
        onTextChange={t => setRestaurantInfo({...restaurantInfo, name: t})}
      />
    </>
  );
};

export {RestaurantAndOwnerNameInputs};
