import React from 'react';

import {useMapContext} from '../../_hooks_/useMapContext';

import {ConfirmButton} from './_components_/ConfirmButton';

const ChooseLocationMode: React.FC = () => {
  const {usageMode} = useMapContext();

  return usageMode === 'chooseLocation' ? (
    <>
      <ConfirmButton />
    </>
  ) : null;
};

export {ChooseLocationMode};
