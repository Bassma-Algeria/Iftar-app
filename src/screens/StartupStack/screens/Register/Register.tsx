import React from 'react';

import {styles} from './Register.style';

import {Layout} from '../../_components_/Layout/Layout';
import {Header} from '../../../../components/Header/Header';

import {RegistrationForm} from './_components_/RegisterForm/RegisterForm';

interface Props {}

const Register: React.FC<Props> = () => {
  return (
    <Layout style={styles.container}>
      <Header color="brown" align="center" variant="h1" fontWeight="semibold">
        تسجيل
      </Header>

      <RegistrationForm />
    </Layout>
  );
};

export {Register};
