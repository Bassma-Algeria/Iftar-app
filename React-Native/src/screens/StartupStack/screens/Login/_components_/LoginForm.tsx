import React, {useState} from 'react';

import {styles} from '../Login.style';

import {ICONS} from '../../../../../utils/constants/Icons';

import {Header} from '../../../../../components/Header/Header';
import {View} from 'react-native';
import {Input} from '../../../../../components/Inputs/TextInput/Input';
import {PasswordInput} from '../../../../../components/Inputs/passwordInput/PasswordInput';
import {Button} from '../../../../../components/Button/Button';
import {Loader} from '../../../../../components/Loader/Loader';

import {useLoginContext} from '../../../_hooks_/UseLoginContext';

import {LoginInfo} from '../../../../../Gateways/AuthGateway/AuthGateway.interface';
import {RestaurentOwner} from '../../../../../Gateways';

interface LoginProps {}

const LoginForm: React.FC<LoginProps> = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [credentialserror, setCredentialsError] = useState<string>('');
  const {loginInfo} = useLoginContext();

  const LoginUser = (userInfo: LoginInfo) => {
    if (!(userInfo.email || userInfo.password)) {
      //Will add shaker
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
    <View style={styles.form}>
      <EmailInput setCredentialsError={setCredentialsError} />
      <CustomPasswordInput setCredentialsError={setCredentialsError} />

      <Header color="brown" align="right" variant="h6" fontWeight="regular" style={styles.text}>
        نسيت كلمة المرور
      </Header>

      {!!credentialserror && (
        <Header color="red" align="center" variant="h3" fontWeight="regular">
          {credentialserror}
        </Header>
      )}
      <View style={styles.buttonContainer}>
        <Button
          onPress={() => {
            LoginUser(loginInfo);
          }}>
          {loading ? (
            <Loader size={30} color="brown" />
          ) : (
            <Header color="whiteShade" variant="h4" fontWeight="semibold">
              تسجيل الدخول
            </Header>
          )}
        </Button>
      </View>
    </View>
  );
};
interface CustomInputProps {
  setCredentialsError: React.Dispatch<React.SetStateAction<string>>;
}
const EmailInput: React.FC<CustomInputProps> = ({setCredentialsError}) => {
  const {loginInfo, setLoginInfo} = useLoginContext();
  const [error, setError] = useState<string>('');

  const onTextChange = (value: string) => {
    setError('');
    setCredentialsError('');
    if (value && !EMAIL_PATTERN.test(value)) {
      setError('should have a valid email');
    }
    setLoginInfo({...loginInfo, email: value});
  };

  return (
    <Input
      value={loginInfo?.email}
      onTextChange={onTextChange}
      icon={ICONS.email}
      style={styles.spaceInputs}
      placeholder="البريد الالكتروني"
      keyboardType="email-address"
      error={error}
      size={20}
    />
  );
};
const CustomPasswordInput: React.FC<CustomInputProps> = ({setCredentialsError}) => {
  const {loginInfo, setLoginInfo} = useLoginContext();
  const [error, setError] = useState<string>('');

  const onTextChange = (value: string) => {
    setCredentialsError('');
    setError('');
    if (!value) {
      setError('empty pass not allowed');
    }
    setLoginInfo({...loginInfo, password: value});
  };

  return (
    <PasswordInput
      value={loginInfo.password}
      onTextChange={onTextChange}
      style={styles.spaceInputs}
      placeholder="كلمة المرور"
      error={error}
    />
  );
};

const EMAIL_PATTERN = /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/;
export {LoginForm};
