import React, {useState} from 'react';

import {styles} from '../../../Profile.style';

import {useEditRestaurantFormContext} from '../_hooks_/useEditRestaurantFormContext';

import {ICONS} from '../../../../../../../utils/constants/Icons';
import {showToast} from '../../../../../../../utils/helpers/showToast';

import {Button} from '../../../../../../../components/Button/Button';
import {Loader} from '../../../../../../../components/Loader/Loader';

const SubmitButton: React.FC = () => {
  const {restaurantInfo, setRestaurantInfo} = useEditRestaurantFormContext();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmit = async () => {
    setIsLoading(true);

    try {
      console.log('====================================');
      console.log(restaurantInfo);
      console.log('====================================');

      showToast('تمت تعديل المطعم بنجاح');
    } catch (error) {
      showToast('يرجى التحقق من اتصالك بالإنترنت');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Button
      style={styles.confirmInfoButtonContainer}
      icon={!isLoading ? ICONS.done : undefined}
      onPress={handleSubmit}>
      {isLoading ? <Loader size={31} color="whiteShade" /> : 'تأكيد المعلومات'}
    </Button>
  );
};

export {SubmitButton};
