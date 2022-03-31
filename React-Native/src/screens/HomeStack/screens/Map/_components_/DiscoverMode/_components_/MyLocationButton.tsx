import React from 'react';

import {styles} from '../DiscoverMode.style';

import {ICONS} from '../../../../../../../utils/constants/Icons';

import {useMapContext} from '../../../_hooks_/useMapContext';
import {useAuthContext} from '../../../../../../_hooks_/useAuthContext';

import {IconButton} from '../../../../../../../components/IconButton/IconButton';

const MyLocationButton: React.FC = () => {
  const {isRestaurantOwner} = useAuthContext();
  const {currentLocation, mapRef} = useMapContext();

  const handlePress = () => {
    if (!currentLocation) {
      return;
    }

    const latitudeDelta = 0.08;
    const longitudeDelta = 0.03;
    mapRef.current?.animateToRegion({...currentLocation, latitudeDelta, longitudeDelta}, 1000);
  };

  return (
    <IconButton
      icon={ICONS.GPS}
      onPress={handlePress}
      style={isRestaurantOwner ? styles.myLocationButtonTop : styles.myLocationButtonBottom}
      iconWidthPercentage={'50%'}
    />
  );
};

export {MyLocationButton};
