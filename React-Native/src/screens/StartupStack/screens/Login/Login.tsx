import React, {Dispatch, SetStateAction, useState} from 'react';

import {styles} from './Login.style';

import {ICONS} from '../../../../utils/constants/Icons';

import {Layout} from '../../_components_/Layout/Layout';
import {Header} from '../../../../components/Header/Header';
import {View} from 'react-native';
import {Input} from '../../../../components/Inputs/TextInput/Input';
import {PasswordInput} from '../../../../components/Inputs/passwordInput/PasswordInput';
import {Button} from '../../../../components/Button/Button';

import {LoginInfo} from '../../../../Gateways/AuthGateway/AuthGateway.interface';
import type {StartupStackScreenProps} from '../../StartupStack.types';
import {RestaurantsOwnersFakeGateway} from '../../../../Gateways/AuthGateway/Fake/RestaurantOwnersFakeGateway';
import {Loader} from '../../../../components/Loader/Loader';

interface Props extends StartupStackScreenProps<'Login'> {}

interface LoginFormProps {
  email: string;
  password: string;
}

interface ErrorsProps extends Partial<LoginFormProps> {
  credentials?: string;
}

const Login: React.FC<Props> = ({navigation}) => {
  const [loginInfo, setLoginInfo] = useState<LoginFormProps>({
    email: '',
    password: '',
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<ErrorsProps>();

  const LoginUser = (userInfo: LoginInfo) => {
    const RestaurentOwner = new RestaurantsOwnersFakeGateway();

    if (!(userInfo.email || userInfo.password)) {
      setError({
        ...error,
        email: {
          PropErrorState: true,
          PropErrorMessage: 'Email should not be empty',
        },
        password: {
          PropErrorState: true,
          PropErrorMessage: 'Password should not be empty',
        },
      });
    } else {
      setLoading(true);
      RestaurentOwner.login(userInfo)
        .then((resp: any) => {
          console.log(resp);
        })
        .catch(err => {
          setError({
            ...error,
            credentials: {
              PropErrorState: true,
              PropErrorMessage: err.message,
            },
          });
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };
  return (
    <Layout>
      <View style={styles.container}>
        <Header color="brown" align="center" variant="h1" fontWeight="semibold">
          تسجيل الدخول
        </Header>
        <LoginForm
          email={loginInfo.email}
          password={loginInfo.password}
          setLoginInfo={setLoginInfo}
          setError={setError}
          error={error}
          loginInfo={loginInfo}
        />
        <Header color="brown" align="right" variant="h6" fontWeight="regular" style={styles.text}>
          نسيت كلمة المرور
        </Header>
        {error.credentials.PropErrorState ? (
          <Header color="red" align="center" variant="h3" fontWeight="regular">
            {error.credentials.PropErrorMessage}
          </Header>
        ) : (
          <></>
        )}
        <View style={styles.buttonContainer}>
          {loading ? (
            <Loader size={50} />
          ) : (
            <Button
              label="تسجيل الدخول"
              onPress={() => {
                LoginUser({
                  email: loginInfo.email,
                  password: loginInfo.password,
                });
              }}
            />
          )}
        </View>
        <Header
          onPress={() => navigation.navigate('Register')}
          color="brown"
          align="center"
          variant="h3"
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
  error: ErrorsProps;
  setError: Dispatch<SetStateAction<ErrorsProps>>;
}

const LoginForm: React.FC<LoginProps> = ({
  email,
  password,
  setLoginInfo,
  loginInfo,
  error,
  setError,
}) => {
  const setEmail = (e: string) => {
    setLoginInfo({...loginInfo, email: e});
    setError({
      ...error,
      credentials: {
        PropErrorState: false,
        PropErrorMessage: '',
      },
    });
    if (!e) {
      setError({
        ...error,
        email: {
          PropErrorState: true,
          PropErrorMessage: 'Email should not be empty',
        },
      });
    } else {
      setError({
        ...error,
        email: {
          PropErrorState: false,
          PropErrorMessage: '',
        },
      });
    }
  };
  const setPassword = (e: string) => {
    setLoginInfo({...loginInfo, password: e});
    setError({
      ...error,
      credentials: {
        PropErrorState: false,
        PropErrorMessage: '',
      },
    });
    if (!e) {
      setError({
        ...error,
        password: {
          PropErrorState: true,
          PropErrorMessage: 'Password should not be empty',
        },
      });
    } else {
      setError({
        ...error,
        password: {
          PropErrorState: false,
          PropErrorMessage: '',
        },
      });
    }
  };
  return (
    <View style={styles.form}>
      <Input
        text={email}
        setText={setEmail}
        label="البريد الالكتروني"
        keyboardType="default"
        icon={ICONS.email}
      />
      {error.email.PropErrorState ? (
        <Header color="red" align="right" variant="h6" fontWeight="regular" style={styles.text}>
          {error.email.PropErrorMessage}
        </Header>
      ) : (
        <></>
      )}
      <PasswordInput password={password} setPassword={setPassword} label="كلمة المرور" />
      {error.password.PropErrorState ? (
        <Header color="red" align="right" variant="h6" fontWeight="regular" style={styles.text}>
          {error.password.PropErrorMessage}
        </Header>
      ) : (
        <></>
      )}
    </View>
  );
};
export {Login};
