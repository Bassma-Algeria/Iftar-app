import React from 'react';

import {styles} from '../ChooseLocationMode.style';

import {ICONS} from '../../../../../../../utils/constants/Icons';

import {useChooseLocationModeContext} from '../../../_hooks_/useChooseLocationModeContext';

import {Button} from '../../../../../../../components/Button/Button';

const ConfirmButton: React.FC = () => {
  const {onConfirm, selectedLocation} = useChooseLocationModeContext();

  const handlePress = () => {
    if (!selectedLocation) {
      return;
    }

    onConfirm?.(selectedLocation);
  };

  return (
    <Button
      inactive={!selectedLocation}
      onPress={handlePress}
      style={styles.confirmButtonContainer}
      icon={ICONS.done}>
      Confirm
    </Button>
  );
};

export {ConfirmButton};
