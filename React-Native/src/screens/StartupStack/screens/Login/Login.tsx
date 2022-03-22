import React from 'react';

import {styles} from './Login.style';

import {Layout} from '../../_components_/Layout/Layout';
import {Header} from '../../../../components/Header/Header';
import {View} from 'react-native';

import type {StartupStackScreenProps} from '../../StartupStack.types';

import {LoginContextProvider} from '../../_context_/LoginContext';
import {LoginForm} from './_components_/LoginForm';

interface Props extends StartupStackScreenProps<'Login'> {}

const Login: React.FC<Props> = ({navigation}) => {
  return (
    <Layout style={styles.layout}>
      <View style={styles.container}>
        <Header color="brown" align="center" variant="h1" fontWeight="semibold">
          تسجيل الدخول
        </Header>
        <LoginContextProvider>
          <LoginForm />
        </LoginContextProvider>
        <Header
          onPress={() => navigation.navigate('Register')}
          color="brown"
          align="center"
          variant="h4"
          fontWeight="regular"
          style={[styles.text, styles.textSpacer]}>
          أنت لا تملك حسابا ؟ سجل الآن
        </Header>
      </View>
    </Layout>
  );
};

export {Login};
