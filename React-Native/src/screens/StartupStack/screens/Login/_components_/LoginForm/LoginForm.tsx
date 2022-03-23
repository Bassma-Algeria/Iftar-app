import React from 'react';
import {View} from 'react-native';

import {styles} from '../../Login.style';

import {LoginContextProvider} from './_context_/LoginContextProvider';

import {EmailInput} from './_components_/EmailInput';
import {PasswordInput} from './_components_/PasswordInput';
import {ErrorMessage} from './_components_/ErrorMessage';
import {ForgetPassword} from './_components_/ForgetPassword';
import {SubmitButton} from './_components_/SubmitButton';

interface LoginProps {}

const LoginForm: React.FC<LoginProps> = () => {
  return (
    <LoginContextProvider>
      <View style={styles.form}>
        <EmailInput />
        <PasswordInput />
        <ForgetPassword />

        <ErrorMessage />

        <SubmitButton />
      </View>
    </LoginContextProvider>
  );
};

export {LoginForm};
