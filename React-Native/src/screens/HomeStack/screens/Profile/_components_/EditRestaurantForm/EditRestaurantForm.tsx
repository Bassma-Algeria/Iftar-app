import {ScrollView, View} from 'react-native';
import React from 'react';

import {styles} from '../../Profile.style';

import {EditRestaurantFormContextProvider} from './_context_/EditRestaurantFormContextProvider';

import {useProfileContext} from '../../_hooks_/useProfileContext';
import {useChoosingLocationState} from '../../../../_hooks_/useChoosingLocationState';

import {Popup} from '../../../../../../components/Popup/Popup';
import {Header} from '../../../../../../components/Header/Header';
import {Pictures} from './_components_/Pictures';
import {RestaurantAndOwnerNameInputs} from './_components_/RestaurantAndOwnerNameInputs';
import {LocationInput} from './_components_/LocationInput/LocationInput';
import {WorkTimesInputs} from './_components_/WorkTimesInputs';
import {SubmitButton} from './_components_/SubmitButton';

const EditRestaurantFormPopup: React.FC = () => {
  const {restaurantToEdit, setRestaurantToEdit} = useProfileContext();
  const {selectedLocation} = useChoosingLocationState();

  return (
    <Popup
      backgroundColor="beigeShade"
      onAutoClose={() => selectedLocation.set(undefined)}
      setIsOpen={() => setRestaurantToEdit(undefined)}
      isOpen={!!restaurantToEdit}
      fullHight>
      <EditRestaurantFormContextProvider restaurant={restaurantToEdit}>
        <ScrollView contentContainerStyle={styles.popupContainer}>
          <AddRestaurantForm />
          <SubmitButton />
        </ScrollView>
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
