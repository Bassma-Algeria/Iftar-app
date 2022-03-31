import React, {useState} from 'react';

import {styles} from '../../../Register.style';

import {useRegisterContext} from '../_hooks_/UseRegisterContext';

import {PasswordInput as BasePasswordInput} from '../../../../../../../components/Inputs/PasswordInput/PasswordInput';

const ConfirmPasswordInput: React.FC = () => {
  const {registerInfo, setRegisterInfo, setServerError} = useRegisterContext();
  const [error, setError] = useState<string>('');
  const onTextChange = (value: string) => {
    setServerError('');
    setRegisterInfo({...registerInfo, confirmPassword: value});
    if (value !== registerInfo.password) {
      setError('كلمة المرور غير متطابقة');
    } else {
      setError('');
    }
  };

  return (
    <BasePasswordInput
      value={registerInfo.confirmPassword}
      onTextChange={onTextChange}
      style={styles.spaceInputs}
      placeholder="كلمة المرور"
      error={error}
    />
  );
};

export {ConfirmPasswordInput};
