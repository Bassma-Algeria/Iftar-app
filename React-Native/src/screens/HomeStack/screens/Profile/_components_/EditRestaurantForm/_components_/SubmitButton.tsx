import React, {useState} from 'react';

import {styles} from '../../../Profile.style';

import {useEditRestaurantFormContext} from '../_hooks_/useEditRestaurantFormContext';
import {useProfileContext} from '../../../_hooks_/useProfileContext';

import {initialEditRestaurantFormState} from '../_context_/EditRestaurantFormContextProvider';

import {restuarantsGateway} from '../../../../../../../Gateways';

import {ICONS} from '../../../../../../../utils/constants/Icons';
import {showToast} from '../../../../../../../utils/helpers/showToast';

import {Button} from '../../../../../../../components/Button/Button';
import {Loader} from '../../../../../../../components/Loader/Loader';
import {useChoosingLocationState} from '../../../../../_hooks_/useChoosingLocationState';

const SubmitButton: React.FC = () => {
  const {restaurantInfo, setRestaurantInfo} = useEditRestaurantFormContext();
  const {selectedLocation} = useChoosingLocationState();
  const {setRestaurantToEdit} = useProfileContext();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmit = async () => {
    setIsLoading(true);

    try {
      await restuarantsGateway.editRestaurant(restaurantInfo);

      setRestaurantToEdit(undefined);
      selectedLocation.set(undefined);
      setRestaurantInfo(initialEditRestaurantFormState);
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
