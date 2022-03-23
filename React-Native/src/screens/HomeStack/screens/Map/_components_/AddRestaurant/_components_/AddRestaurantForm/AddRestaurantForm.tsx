import {View} from 'react-native';
import React from 'react';

import {styles} from '../../AddRestaurant.style';

import {Header} from '../../../../../../../../components/Header/Header';
import {Pictures} from './_components_/Pictures';
import {RestaurantAndOwnerNameInputs} from './_components_/RestaurantAndOwnerNameInputs';
import {LocationInput} from './_components_/LocationInput';
import {WorkTimesInputs} from './_components_/WorkTimesInputs';

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

export {AddRestaurantForm};
