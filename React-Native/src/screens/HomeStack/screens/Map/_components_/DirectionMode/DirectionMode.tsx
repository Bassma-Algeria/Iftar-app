import React from 'react';

import {useMapContext} from '../../_hooks_/useMapContext';

import {ReturnButton} from './_components_/ReturnButton';
import {DirectionInfo} from './_components_/DirectionInfo';

const DirectionMode: React.FC = () => {
  const {usageMode} = useMapContext();

  return usageMode === 'direction' ? (
    <>
      <ReturnButton />
      <DirectionInfo />
    </>
  ) : null;
};

export {DirectionMode};
