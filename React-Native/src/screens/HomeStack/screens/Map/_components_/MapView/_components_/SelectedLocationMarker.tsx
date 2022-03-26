import React from 'react';
import {Image} from 'react-native';
import {Marker} from 'react-native-maps';

import {styles} from '../../../Map.style';

import {ICONS} from '../../../../../../../utils/constants/Icons';

import {useChooseLocationModeContext} from '../../../_hooks_/useChooseLocationModeContext';

const SelectedLocationMarker: React.FC = () => {
  const {selectedLocation} = useChooseLocationModeContext();

  return selectedLocation ? (
    <Marker coordinate={selectedLocation} style={styles.markerContainer}>
      <Image source={ICONS.restaurantMarker} style={styles.pin} resizeMode="contain" />
    </Marker>
  ) : null;
};

export {SelectedLocationMarker};
