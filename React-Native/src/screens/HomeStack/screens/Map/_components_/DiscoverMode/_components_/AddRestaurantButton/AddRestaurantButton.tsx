import React from 'react';

import {styles} from '../../DiscoverMode.style';

import {ICONS} from '../../../../../../../../utils/constants/Icons';

import {useMapContext} from '../../../../_hooks_/useMapContext';

import {Button} from '../../../../../../../../components/Button/Button';

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
