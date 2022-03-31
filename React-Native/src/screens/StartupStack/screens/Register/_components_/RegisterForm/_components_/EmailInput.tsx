import React, {useState} from 'react';

import {ICONS} from '../../../../../../../utils/constants/Icons';

import {useRegisterContext} from '../_hooks_/UseRegisterContext';

import {styles} from '../../../Register.style';

import {Input} from '../../../../../../../components/Inputs/TextInput/Input';

const EmailInput: React.FC = () => {
  const {registerInfo, setRegisterInfo, setServerError} = useRegisterContext();
  const [error, setError] = useState<string>('');

  const onTextChange = (value: string) => {
    setError('');
    setServerError('');

    if (value && !EMAIL_PATTERN.test(value)) {
      setError('يجب أن يكون بريدًا إلكترونيًا صالحًا !!');
    }

    setRegisterInfo({...registerInfo, email: value});
  };

  return (
    <Input
      value={registerInfo?.email}
      onTextChange={onTextChange}
      icon={ICONS.email}
      style={styles.spaceInputs}
      placeholder="البريد الالكتروني"
      keyboardType="email-address"
      error={error}
    />
  );
};

const EMAIL_PATTERN = /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/;

export {EmailInput};
