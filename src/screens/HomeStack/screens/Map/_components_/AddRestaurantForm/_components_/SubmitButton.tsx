import React, {useState} from 'react';

import {styles} from '../AddRestaurantForm.style';

import {restuarantsGateway} from '../../../../../../../Gateways';

import {useMapContext} from '../../../_hooks_/useMapContext';
import {useAddRestaurantFormContext} from '../_hooks_/useAddRestaurantFormContext';
import {useChoosingLocationState} from '../../../../../_hooks_/useChoosingLocationState';

import {initialAddRestaurantFormState} from '../_context_/AddRestaurantFormContextProvider';

import {ICONS} from '../../../../../../../utils/constants/Icons';
import {showToast} from '../../../../../../../utils/helpers/showToast';

import {Button} from '../../../../../../../components/Button/Button';
import {Loader} from '../../../../../../../components/Loader/Loader';

const SubmitButton: React.FC = () => {
  const {restaurantInfo, setRestaurantInfo} = useAddRestaurantFormContext();
  const {selectedLocation, onConfirm} = useChoosingLocationState();
  const {setUsageMode, setIsAddRestaurantFormOpen} = useMapContext();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmit = async () => {
    setIsLoading(true);

    try {
      const pictures = restaurantInfo.pictures.map(({base64}) => base64);
      await restuarantsGateway.addRestaurant({...restaurantInfo, pictures});

      setUsageMode('discover');
      selectedLocation.set(undefined);
      onConfirm.set(undefined);
      setIsAddRestaurantFormOpen(false);
      setRestaurantInfo(initialAddRestaurantFormState);
      showToast('تمت إضافة المطعم بنجاح');
    } catch (error) {
      showToast('حدث خطأ ما ، يرجى التحقق من اتصالك بالإنترنت والمحاولة مرة أخرى');
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
