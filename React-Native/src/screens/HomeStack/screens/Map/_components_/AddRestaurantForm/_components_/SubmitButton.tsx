import React, {useState} from 'react';

import {styles} from '../AddRestaurantForm.style';

import {useAddRestaurantFormContext} from '../_hooks_/useAddRestaurantFormContext';

import {ICONS} from '../../../../../../../utils/constants/Icons';

import {Button} from '../../../../../../../components/Button/Button';
import {restuarantsGateway} from '../../../../../../../Gateways';
import {Loader} from '../../../../../../../components/Loader/Loader';
import {showToast} from '../../../../../../../utils/helpers/showToast';
import {useMapContext} from '../../../_hooks_/useMapContext';
import {initialAddRestaurantFormState} from '../_context_/AddRestaurantFormContextProvider';
import {useChooseLocationModeContext} from '../../../_hooks_/useChooseLocationModeContext';

const SubmitButton: React.FC = () => {
  const {restaurantInfo, setRestaurantInfo} = useAddRestaurantFormContext();
  const {setSelectedLocation} = useChooseLocationModeContext();
  const {setUsageMode, setIsAddRestaurantFormOpen} = useMapContext();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmit = async () => {
    setIsLoading(true);

    try {
      await restuarantsGateway.addRestaurant(restaurantInfo);

      setUsageMode('discover');
      setSelectedLocation(undefined);
      setIsAddRestaurantFormOpen(false);
      setRestaurantInfo(initialAddRestaurantFormState);
      showToast('تمت إضافة المطعم بنجاح');
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
