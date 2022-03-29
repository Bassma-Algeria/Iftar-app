import React from 'react';

import {Header} from '../../../../../../../components/Header/Header';

import {styles} from '../../../Register.style';

const ForgetPassword: React.FC = () => {
  return (
    <Header color="brown" align="right" variant="h6" fontWeight="regular" style={styles.text}>
      نسيت كلمة المرور
    </Header>
  );
};
export {ForgetPassword};
