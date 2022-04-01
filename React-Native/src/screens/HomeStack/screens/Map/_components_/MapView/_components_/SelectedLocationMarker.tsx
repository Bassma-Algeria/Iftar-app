import React from 'react';
import {Image} from 'react-native';
import {Marker} from 'react-native-maps';

import {styles} from '../../../Map.style';

import {ICONS} from '../../../../../../../utils/constants/Icons';

import {useChoosingLocationState} from '../../../../../_hooks_/useChoosingLocationState';

const SelectedLocationMarker: React.FC = () => {
  const {selectedLocation} = useChoosingLocationState();
  const coordinates = selectedLocation.value;

  return coordinates ? (
    <Marker
      coordinate={{latitude: coordinates.latitude, longitude: coordinates.longitude}}
      style={styles.markerContainer}>
      <Image source={ICONS.locationFilled} style={styles.pin} resizeMode="contain" />
    </Marker>
  ) : null;
};

export {SelectedLocationMarker};
