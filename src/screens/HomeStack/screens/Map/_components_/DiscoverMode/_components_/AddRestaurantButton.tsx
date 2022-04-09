import React from 'react';

import {styles} from '../DiscoverMode.style';

import {ICONS} from '../../../../../../../utils/constants/Icons';

import {useMapContext} from '../../../_hooks_/useMapContext';
import {useAuthContext} from '../../../../../../_hooks_/useAuthContext';

import {Button} from '../../../../../../../components/Button/Button';

const AddRestaurantButton: React.FC = () => {
  const {setIsAddRestaurantFormOpen} = useMapContext();
  const {isRestaurantOwner} = useAuthContext();

  return isRestaurantOwner ? (
    <Button
      onPress={() => setIsAddRestaurantFormOpen(true)}
      style={styles.addRestaurantButtonContainer}
      icon={ICONS.plus}>
      أضف مطعم
    </Button>
  ) : null;
};

export {AddRestaurantButton};
