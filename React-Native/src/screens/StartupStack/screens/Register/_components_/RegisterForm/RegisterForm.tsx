import React from 'react';
import {View} from 'react-native';

import {styles} from '../../Register.style';

import {RegisterContextProvider} from './_context_/RegisterContextProvider';

import {EmailInput} from './_components_/EmailInput';
import {PasswordInput} from './_components_/PasswordInput';
import {ErrorMessage} from './_components_/ErrorMessage';
import {SubmitButton} from './_components_/SubmitButton';
import {ConfirmPasswordInput} from './_components_/ConfirmPasswordInput';
import {PhoneNumberInput} from './_components_/PhoneNumberInput';

interface Props {}

const RegistrationForm: React.FC<Props> = () => {
  return (
    <RegisterContextProvider>
      <View style={styles.form}>
        <EmailInput />
        <PasswordInput />
        <ConfirmPasswordInput />
        <PhoneNumberInput />
        <ErrorMessage />
        <SubmitButton />
      </View>
    </RegisterContextProvider>
  );
};

export {RegistrationForm};
