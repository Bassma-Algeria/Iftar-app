import React from 'react';

import {styles} from '../../../../Map.style';

import {ICONS} from '../../../../../../../../utils/constants/Icons';

import {Button} from '../../../../../../../../components/Button/Button';
import {useMapContext} from '../../../../_hooks_/useMapContext';

const AddRestaurantButton: React.FC = () => {
  const {setIsAddRestaurantFormOpen} = useMapContext();

  return (
    <Button
      onPress={() => setIsAddRestaurantFormOpen(true)}
      style={styles.addRestaurantButtonContainer}
      icon={ICONS.plus}>
      أضف مطعم
    </Button>
  );
};

export {AddRestaurantButton};
