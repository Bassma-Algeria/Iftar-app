import {View} from 'react-native';
import React from 'react';

import {styles} from '../../Profile.style';

import {EditRestaurantFormContextProvider} from './_context_/EditRestaurantFormContextProvider';

import {useProfileContext} from '../../_hooks_/useProfileContext';

import {Popup} from '../../../../../../components/Popup/Popup';
import {Header} from '../../../../../../components/Header/Header';
import {Pictures} from './_components_/Pictures';
import {RestaurantAndOwnerNameInputs} from './_components_/RestaurantAndOwnerNameInputs';
import {LocationInput} from './_components_/LocationInput/LocationInput';
import {WorkTimesInputs} from './_components_/WorkTimesInputs';
import {SubmitButton} from './_components_/SubmitButton';

const EditRestaurantFormPopup: React.FC = () => {
  const {restaurantToEdit, setRestaurantToEdit} = useProfileContext();

  return (
    <Popup
      backgroundColor="beigeShade"
      containerStyle={styles.popupContainer}
      onClose={() => setRestaurantToEdit(undefined)}
      isOpen={!!restaurantToEdit}
      fullHight>
      <EditRestaurantFormContextProvider restaurant={restaurantToEdit}>
        <AddRestaurantForm />
        <SubmitButton />
      </EditRestaurantFormContextProvider>
    </Popup>
  );
};

const AddRestaurantForm = () => {
  return (
    <>
      <View style={styles.popupInputsContainer}>
        <Header style={styles.popupTitle} align="center">
          تعديل المعلومات
        </Header>

        <RestaurantAndOwnerNameInputs />
        <LocationInput />

        <Header>اوقات العمل</Header>
        <WorkTimesInputs />
      </View>

      <Pictures />
    </>
  );
};

export {EditRestaurantFormPopup};
