import React from 'react';

import {styles} from '../../../Register.style';

import {useRegisterContext} from '../_hooks_/UseRegisterContext';

import {PasswordInput as BasePasswordInput} from '../../../../../../../components/Inputs/PasswordInput/PasswordInput';

const PasswordInput: React.FC = () => {
  const {registerInfo, setRegisterInfo, setServerError} = useRegisterContext();

  const onTextChange = (value: string) => {
    setServerError('');
    setRegisterInfo({...registerInfo, password: value});
  };

  return (
    <BasePasswordInput
      value={registerInfo.password}
      onTextChange={onTextChange}
      style={styles.spaceInputs}
      placeholder="كلمة المرور"
    />
  );
};

export {PasswordInput};
