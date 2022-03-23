import React, {useState} from 'react';

import {styles} from '../Register.style';

import {ICONS} from '../../../../../utils/constants/Icons';

import {Header} from '../../../../../components/Header/Header';
import {View} from 'react-native';
import {Input} from '../../../../../components/Inputs/TextInput/Input';
import {PasswordInput} from '../../../../../components/Inputs/passwordInput/PasswordInput';
import {Button} from '../../../../../components/Button/Button';
import {Loader} from '../../../../../components/Loader/Loader';

import {useRegistrationContext} from '../../../_hooks_/UseRegistrationContext';

import {SignupInfo} from '../../../../../Gateways/AuthGateway/AuthGateway.interface';
import {RestaurentOwner} from '../../../../../Gateways';

interface RegistrationProps {}

const RegisterationForm: React.FC<RegistrationProps> = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [serverError, setServerError] = useState<string>('');
  const {registrationInfo} = useRegistrationContext();

  const RegisterUser = (userInfo: SignupInfo) => {
    if (
      !(userInfo.email || userInfo.password || userInfo.phoneNumber || userInfo.confirmPassword)
    ) {
      //Will add shaker
    } else {
      setLoading(true);
      RestaurentOwner.signup(userInfo)
        .then((resp: any) => {
          console.log(resp);
        })
        .catch(err => {
          console.log(err.message);
          setServerError(err.message);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };
  return (
    <View style={styles.form}>
      <EmailInput setServerError={setServerError} />
      <CustomPasswordInput setServerError={setServerError} />
      <ConfirmPasswordInput setServerError={setServerError} />
      <PhoneNumberInput setServerError={setServerError} />

      {!!serverError && (
        <Header color="red" align="center" variant="h3" fontWeight="regular">
          {serverError}
        </Header>
      )}

      <View style={styles.buttonContainer}>
        <Button
          onPress={() => {
            RegisterUser(registrationInfo);
          }}>
          {loading ? (
            <Loader size={30} color="brown" />
          ) : (
            <Header color="whiteShade" variant="h4" fontWeight="semibold">
              سجل الآن
            </Header>
          )}
        </Button>
      </View>
    </View>
  );
};
interface CustomInputProps {
  setServerError: React.Dispatch<React.SetStateAction<string>>;
}
const EmailInput: React.FC<CustomInputProps> = ({setServerError}) => {
  const {registrationInfo, setRegistrationInfo} = useRegistrationContext();
  const [error, setError] = useState<string>('');

  const onTextChange = (value: string) => {
    setError('');
    setServerError('');
    if (value && !EMAIL_PATTERN.test(value)) {
      setError('should have a valid email');
    }
    setRegistrationInfo({...registrationInfo, email: value});
  };

  return (
    <Input
      value={registrationInfo.email}
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
const CustomPasswordInput: React.FC<CustomInputProps> = ({setServerError}) => {
  const {registrationInfo, setRegistrationInfo} = useRegistrationContext();
  const [error, setError] = useState<string>('');

  const onTextChange = (value: string) => {
    setServerError('');
    setError('');
    if (!value) {
      setError('empty pass not allowed');
    }
    setRegistrationInfo({...registrationInfo, password: value});
  };

  return (
    <PasswordInput
      value={registrationInfo.password}
      onTextChange={onTextChange}
      style={styles.spaceInputs}
      placeholder="كلمة المرور"
      error={error}
    />
  );
};
const ConfirmPasswordInput: React.FC<CustomInputProps> = ({setServerError}) => {
  const {registrationInfo, setRegistrationInfo} = useRegistrationContext();
  const [error, setError] = useState<string>('');

  const onTextChange = (value: string) => {
    setError('');
    setServerError('');
    if (!value) {
      setError('empty pass not allowed');
    } else if (value !== registrationInfo.password) {
      setError('it needs to match password');
    }
    setRegistrationInfo({...registrationInfo, confirmPassword: value});
  };

  return (
    <PasswordInput
      value={registrationInfo.confirmPassword}
      onTextChange={onTextChange}
      style={styles.spaceInputs}
      placeholder="تأكيد كلمة المرور"
      error={error}
    />
  );
};
const PhoneNumberInput: React.FC<CustomInputProps> = ({setServerError}) => {
  const {registrationInfo, setRegistrationInfo} = useRegistrationContext();
  const [error, setError] = useState<string>('');

  const onTextChange = (value: string) => {
    setError('');
    setServerError('');
    if (value && !PHONE_NUMBER_PATTER.test(value)) {
      setError('should have a valid phone number');
    }
    setRegistrationInfo({...registrationInfo, phoneNumber: value});
  };

  return (
    <Input
      value={registrationInfo.phoneNumber}
      onTextChange={onTextChange}
      style={styles.spaceInputs}
      placeholder="رقم الهاتف"
      error={error}
      keyboardType="numeric"
      icon={ICONS.phoneLightColor}
      size={20}
    />
  );
};
const EMAIL_PATTERN = /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/;
const PHONE_NUMBER_PATTER = /^(00213|\+213|0)(5|6|7)[0-9]{8}$/;
export {RegisterationForm};
