import {View} from 'react-native';
import React from 'react';

import {styles} from './AddRestaurantForm.style';

import {useMapContext} from '../../_hooks_/useMapContext';

import {AddRestaurantFormContextProvider} from './_context_/AddRestaurantFormContextProvider';

import {Popup} from '../../../../../../components/Popup/Popup';
import {Header} from '../../../../../../components/Header/Header';
import {Pictures} from './_components_/Pictures';
import {RestaurantAndOwnerNameInputs} from './_components_/RestaurantAndOwnerNameInputs';
import {LocationInput} from './_components_/LocationInput/LocationInput';
import {WorkTimesInputs} from './_components_/WorkTimesInputs';
import {SubmitButton} from './_components_/SubmitButton';

const AddRestaurantFormPopup: React.FC = () => {
  const {isAddRestaurantFormOpen, setIsAddRestaurantFormOpen} = useMapContext();

  return (
    <Popup
      containerStyle={styles.container}
      onClose={() => setIsAddRestaurantFormOpen(false)}
      isOpen={isAddRestaurantFormOpen}
      fullHight>
      <AddRestaurantFormContextProvider>
        <AddRestaurantForm />
        <SubmitButton />
      </AddRestaurantFormContextProvider>
    </Popup>
  );
};

const AddRestaurantForm = () => {
  return (
    <>
      <View style={styles.inputsContainer}>
        <Header style={styles.title} align="center">
          يرجى إدخال بعض المعلومات الخاصة بالمطعم
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

export {AddRestaurantFormPopup};
