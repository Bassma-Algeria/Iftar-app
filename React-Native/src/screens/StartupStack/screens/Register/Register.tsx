import React from 'react';
import {View, ScrollView} from 'react-native';

import {styles} from './Register.style';

import {ICONS} from '../../../../utils/constants/Icons';

import {Layout} from '../../_components_/Layout/Layout';
import {Header} from '../../../../components/Header/Header';
import {Input} from '../../../../components/Inputs/TextInput/Input';
import {PasswordInput} from '../../../../components/Inputs/passwordInput/PasswordInput';
import {Button} from '../../../../components/Button/Button';

interface Props {}

const Register: React.FC<Props> = () => {
  return (
    <ScrollView style={styles.mainContainer}>
      <Layout>
        <View style={styles.container}>
          <Header color="brown" variant="h1" fontWeight="semibold">
            تسجيل
          </Header>
          <Input
            label="البريد الالكتروني"
            keyboardType="default"
            icon={ICONS.email}
          />
          <PasswordInput label="كلمة المرور" />
          <PasswordInput label="تأكيد كلمة المرور" />
          <Input
            label="رقم الهاتف"
            keyboardType="numeric"
            icon={ICONS.phoneLightColor}
          />
        </View>
      </Layout>
      <View style={styles.buttonContainer}>
        <Button label="سجل الآن" />
      </View>
    </ScrollView>
  );
};

export {Register};
