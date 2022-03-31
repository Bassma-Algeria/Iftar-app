import React from 'react';

import {styles} from '../DirectionMode.style';

import {ICONS} from '../../../../../../../utils/constants/Icons';

import {IconButton} from '../../../../../../../components/IconButton/IconButton';
import {useMapContext} from '../../../_hooks_/useMapContext';
import {useDirectionModeContext} from '../../../_hooks_/useDirectionModeContext';

const ReturnButton: React.FC = () => {
  const {setUsageMode} = useMapContext();
  const {setDestinationLocation, setDistance} = useDirectionModeContext();

  const handlePress = () => {
    setUsageMode('discover');
    setDestinationLocation(undefined);
    setDistance(undefined);
  };

  return (
    <IconButton icon={ICONS.rightArrowWhite} style={styles.returnButton} onPress={handlePress} />
  );
};

export {ReturnButton};
