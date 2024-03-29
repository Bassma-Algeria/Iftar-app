import React from 'react';

import {Header} from '../../../../../../../components/Header/Header';

import {useRegisterContext} from '../_hooks_/UseRegisterContext';

const ErrorMessage = () => {
  const {serverError} = useRegisterContext();

  return serverError ? (
    <Header color="red" align="center" fontWeight="regular">
      {serverError}
    </Header>
  ) : null;
};
export {ErrorMessage};
