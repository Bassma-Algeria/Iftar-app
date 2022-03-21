import React, {useState} from 'react';
import {View} from 'react-native';

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
    <Layout style={styles.container}>
      <Header color="brown" align="center" variant="h1" fontWeight="semibold">
        تسجيل
      </Header>
      <RegisterationForm />
      <View style={styles.buttonContainer}>
        <Button label="سجل الآن" />
      </View>
    </Layout>
  );
};

interface RegisterProps {}
const RegisterationForm: React.FC<RegisterProps> = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  return (
    <>
      <Input
        text={email}
        setText={setEmail}
        label="البريد الالكتروني"
        keyboardType="default"
        icon={ICONS.email}
      />
      <PasswordInput
        password={password}
        setPassword={setPassword}
        label="كلمة المرور"
      />
      <PasswordInput
        password={confirmPassword}
        setPassword={setConfirmPassword}
        label="تأكيد كلمة المرور"
      />

      <Input
        text={phone}
        setText={setPhone}
        label="رقم الهاتف"
        keyboardType="numeric"
        icon={ICONS.phoneLightColor}
      />
    </>
  );
};
export {Register};
