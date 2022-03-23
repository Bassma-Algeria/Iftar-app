import React from 'react';

import {styles} from '../AddRestaurant.style';

import {useAddRestaurantContext} from '../_hooks_/useAddRestaurantContext';

import {ICONS} from '../../../../../../../utils/constants/Icons';

import {Button} from '../../../../../../../components/Button/Button';

const SubmitButton: React.FC = () => {
  const {restaurantInfo} = useAddRestaurantContext();

  const handleSubmit = () => {
    console.log(restaurantInfo);
  };

  return (
    <Button style={styles.confirmInfoButtonContainer} icon={ICONS.done} onPress={handleSubmit}>
      تأكيد المعلومات
    </Button>
  );
};

export {SubmitButton};
