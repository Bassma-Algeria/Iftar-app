import React from 'react';
import {View} from 'react-native';
import {Header} from '../../../../components/Header/Header';
import {Layout} from '../../_components_/Layout/Layout';
import {styles} from './Register.style';
import {Input} from '../../_components_/Inputs/TextInput/Input';
import {PasswordInput} from '../../_components_/Inputs/passwordInput/PasswordInput';
import {Email} from '../../_components_/Icons/Icons';
import {Phone} from '../../_components_/Icons/Icons';
import {Button} from '../../../../components/Button/Button';
interface Props {}
const Register: React.FC<Props> = () => {
  return (
    <>
      <View style={styles.mainContainer}>
        <View style={styles.layout}>
          <Layout>
            <View style={styles.container}>
              <Header color="brown" variant="h1" fontWeight="semibold">
                تسجيل
              </Header>
            </View>
          </Layout>
        </View>
        <View style={styles.inputsContainer}>
          <Input label="البريد الالكتروني" keyboardType="default">
            <Email />
          </Input>
          <PasswordInput label="كلمة المرور" />
          <PasswordInput label="تأكيد كلمة المرور" />
          <Input label="رقم الهاتف" keyboardType="numeric">
            <Phone />
          </Input>
        </View>
        <View style={styles.buttonContainer}>
          <Button label="سجل الآن" />
        </View>
      </View>
    </>
  );
};

export {Register};
