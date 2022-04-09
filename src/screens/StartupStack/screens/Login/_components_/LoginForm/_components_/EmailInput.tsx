import React, {useState} from 'react';

import {ICONS} from '../../../../../../../utils/constants/Icons';

import {useLoginContext} from '../_hooks_/UseLoginContext';

import {styles} from '../../../Login.style';

import {Input} from '../../../../../../../components/Inputs/TextInput/Input';

const EmailInput: React.FC = () => {
  const {loginInfo, setLoginInfo, setServerError} = useLoginContext();
  const [error, setError] = useState<string>('');

  const onTextChange = (value: string) => {
    setError('');
    setServerError('');

    if (value && !EMAIL_PATTERN.test(value)) {
      setError('يجب أن يكون بريدًا إلكترونيًا صالحًا !!');
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
    />
  );
};

const EMAIL_PATTERN = /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/;

export {EmailInput};
