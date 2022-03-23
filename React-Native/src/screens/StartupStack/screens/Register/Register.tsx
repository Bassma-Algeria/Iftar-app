import React from 'react';

import {styles} from './Register.style';

import {Layout} from '../../_components_/Layout/Layout';
import {Header} from '../../../../components/Header/Header';

import {RegisterationForm} from './_components_/RegisterForm';
import {RegistrationContextProvider} from '../../_context_/RegistrationContext';

interface Props {}

const Register: React.FC<Props> = () => {
  return (
    <Layout style={styles.container}>
      <Header color="brown" align="center" variant="h1" fontWeight="semibold">
        تسجيل
      </Header>
      <RegistrationContextProvider>
        <RegisterationForm />
      </RegistrationContextProvider>
    </Layout>
  );
};

export {Register};
