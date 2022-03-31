import React from 'react';

import {styles} from '../ChooseLocationMode.style';

import {ICONS} from '../../../../../../../utils/constants/Icons';

import {useChoosingLocationState} from '../../../../../_hooks_/useChoosingLocationState';

import {Button} from '../../../../../../../components/Button/Button';

const ConfirmButton: React.FC = () => {
  const {onConfirm, selectedLocation} = useChoosingLocationState();
  const location = selectedLocation.get();

  const handlePress = () => {
    location && onConfirm.get()?.(location);
  };

  return (
    <Button
      inactive={!location}
      onPress={handlePress}
      style={styles.confirmButtonContainer}
      icon={ICONS.done}>
      تأكيد الموقع
    </Button>
  );
};

export {ConfirmButton};
