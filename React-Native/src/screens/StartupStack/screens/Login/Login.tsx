import React, {Dispatch, SetStateAction, useState} from 'react';

import {styles} from './Login.style';

import {ICONS} from '../../../../utils/constants/Icons';

import {Layout} from '../../_components_/Layout/Layout';
import {Header} from '../../../../components/Header/Header';
import {View} from 'react-native';
import {Input} from '../../../../components/Inputs/TextInput/Input';
import {PasswordInput} from '../../../../components/Inputs/passwordInput/PasswordInput';
import {Button} from '../../../../components/Button/Button';
import {Loader} from '../../../../components/Loader/Loader';

import type {StartupStackScreenProps} from '../../StartupStack.types';

import {LoginInfo} from '../../../../Gateways/AuthGateway/AuthGateway.interface';
import {RestaurantsOwnersFakeGateway} from '../../../../Gateways/AuthGateway/Fake/RestaurantOwnersFakeGateway';

interface Props extends StartupStackScreenProps<'Login'> {}

interface LoginFormProps {
  email: string;
  password: string;
}

interface ErrorsProps extends Partial<LoginFormProps> {
  credentials?: string;
}

const Login: React.FC<Props> = ({navigation}) => {
  const [loginInfo, setLoginInfo] = useState<LoginFormProps>({email: '', password: ''});
  const [loading, setLoading] = useState<boolean>(false);
  const [credentialserror, setCredentialsError] = useState<string>('');

  const LoginUser = (userInfo: LoginInfo) => {
    const RestaurentOwner = new RestaurantsOwnersFakeGateway();

    if (!(userInfo.email || userInfo.password)) {
    } else {
      setLoading(true);
      RestaurentOwner.login(userInfo)
        .then((resp: any) => {
          console.log(resp);
        })
        .catch(err => {
          console.log(err.message);
          setCredentialsError(err.message);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };

  return (
    <Layout style={styles.layout}>
      <View style={styles.container}>
        <Header color="brown" align="center" variant="h1" fontWeight="semibold">
          تسجيل الدخول
        </Header>
        <LoginForm
          email={loginInfo.email}
          password={loginInfo.password}
          setLoginInfo={setLoginInfo}
          loginInfo={loginInfo}
          setCredentialsError={setCredentialsError}
        />
        <Header color="brown" align="right" variant="h6" fontWeight="regular" style={styles.text}>
          نسيت كلمة المرور
        </Header>
        {!!credentialserror && (
          <Header color="red" align="center" variant="h3" fontWeight="regular">
            {credentialserror}
          </Header>
        )}
        <View style={styles.buttonContainer}>
          {loading ? (
            <Loader size={50} />
          ) : (
            <Button
              label="تسجيل الدخول"
              onPress={() => {
                LoginUser(loginInfo);
              }}
            />
          )}
        </View>
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

interface LoginProps {
  email: string;
  password: string;
  loginInfo: LoginFormProps;
  setLoginInfo: Dispatch<SetStateAction<LoginFormProps>>;
  setCredentialsError: Dispatch<SetStateAction<string>>;
}

const LoginForm: React.FC<LoginProps> = props => {
  return (
    <View style={styles.form}>
      <EmailInput {...props} />
      {/* <PasswordInput
        password={password}
        setPassword={setPassword}
        label="كلمة المرور"
        style={styles.spaceInputs}
      /> */}
    </View>
  );
};

const EmailInput: React.FC<LoginProps> = ({loginInfo, setLoginInfo}) => {
  const [error, setError] = useState<string>('');

  const onTextChange = (value: string) => {
    setError('');

    if (value && !EMAIL_PATTERN.test(value)) {
      setError('should have a valid email');
    }

    setLoginInfo({...loginInfo, email: value});
  };

  return (
    <Input
      value={loginInfo.email}
      onTextChange={onTextChange}
      icon={ICONS.email}
      style={styles.spaceInputs}
      placeholder="البريد الالكتروني"
      keyboardType="email-address"
      error={error}
    />
  );
};

const EMAIL_PATTERN = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

export {Login};
