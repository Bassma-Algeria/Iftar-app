import React, {useState} from 'react';

import {ICONS} from '../../../../../../../utils/constants/Icons';

import {useRegisterContext} from '../_hooks_/UseRegisterContext';

import {styles} from '../../../Register.style';

import {Input} from '../../../../../../../components/Inputs/TextInput/Input';

const PhoneNumberInput: React.FC = () => {
  const {registerInfo, setRegisterInfo, setServerError} = useRegisterContext();
  const [error, setError] = useState<string>('');

  const onTextChange = (value: string) => {
    setError('');
    setServerError('');

    if (value && !PHONE_NUMBER_PATTERN.test(value)) {
      setError('يجب أن يكون رقم هاتف صالحًا !!');
    }

    setRegisterInfo({...registerInfo, phoneNumber: value});
  };

  return (
    <Input
      value={registerInfo?.phoneNumber}
      onTextChange={onTextChange}
      icon={ICONS.phoneLightColor}
      style={styles.spaceInputs}
      placeholder="رقم الهاتف"
      keyboardType="numeric"
      error={error}
    />
  );
};

const PHONE_NUMBER_PATTERN = /^(00213|\+213|0)(5|6|7)[0-9]{8}$/;

export {PhoneNumberInput};
