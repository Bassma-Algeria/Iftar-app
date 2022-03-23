import React from 'react';

import {Header} from '../../../../../../../components/Header/Header';

import {useLoginContext} from '../_hooks_/UseLoginContext';

const ErrorMessage = () => {
  const {serverError} = useLoginContext();

  return serverError ? (
    <Header color="red" align="center" variant="h5" fontWeight="regular">
      {serverError}
    </Header>
  ) : null;
};
export {ErrorMessage};
