import React from 'react';

import {styles} from '../../../Login.style';

import {useLoginContext} from '../_hooks_/UseLoginContext';

import {PasswordInput as BasePasswordInput} from '../../../../../../../components/Inputs/PasswordInput/PasswordInput';

const PasswordInput: React.FC = () => {
  const {loginInfo, setLoginInfo, setServerError} = useLoginContext();

  const onTextChange = (value: string) => {
    setServerError('');
    setLoginInfo({...loginInfo, password: value});
  };

  return (
    <BasePasswordInput
      value={loginInfo.password}
      onTextChange={onTextChange}
      style={styles.spaceInputs}
      placeholder="كلمة المرور"
    />
  );
};

export {PasswordInput};
