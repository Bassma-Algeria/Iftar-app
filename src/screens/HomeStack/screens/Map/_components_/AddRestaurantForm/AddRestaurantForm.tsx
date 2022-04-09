import {ScrollView, View} from 'react-native';
import React from 'react';

import {styles} from './AddRestaurantForm.style';

import {useMapContext} from '../../_hooks_/useMapContext';
import {useAuthContext} from '../../../../../_hooks_/useAuthContext';
import {useChoosingLocationState} from '../../../../_hooks_/useChoosingLocationState';

import {AddRestaurantFormContextProvider} from './_context_/AddRestaurantFormContextProvider';

import {Popup} from '../../../../../../components/Popup/Popup';
import {Header} from '../../../../../../components/Header/Header';
import {Pictures} from './_components_/Pictures';
import {RestaurantNameInput} from './_components_/RestaurantNameInput';
import {LocationInput} from './_components_/LocationInput';
import {WorkTimesInputs} from './_components_/WorkTimesInputs';
import {SubmitButton} from './_components_/SubmitButton';

const AddRestaurantFormPopup: React.FC = () => {
  const {isRestaurantOwner} = useAuthContext();
  const {selectedLocation, onConfirm} = useChoosingLocationState();
  const {isAddRestaurantFormOpen, setIsAddRestaurantFormOpen, setUsageMode} = useMapContext();

  const onClosePopup = () => {
    setUsageMode('discover');
    selectedLocation.set(undefined);
    onConfirm.set(undefined);
  };

  return isRestaurantOwner ? (
    <Popup
      onAutoClose={onClosePopup}
      isOpen={isAddRestaurantFormOpen}
      setIsOpen={setIsAddRestaurantFormOpen}
      fullHight>
      <AddRestaurantFormContextProvider>
        <ScrollView contentContainerStyle={styles.container}>
          <AddRestaurantForm />
          <SubmitButton />
        </ScrollView>
      </AddRestaurantFormContextProvider>
    </Popup>
  ) : null;
};

const AddRestaurantForm = () => {
  return (
    <>
      <View style={styles.inputsContainer}>
        <Header style={styles.title} align="center">
          يرجى إدخال بعض المعلومات الخاصة بالمطعم
        </Header>

        <RestaurantNameInput />
        <LocationInput />

        <Header>اوقات العمل</Header>
        <WorkTimesInputs />
      </View>

      <Pictures />
    </>
  );
};

export {AddRestaurantFormPopup};
