import React from 'react';
import {Image} from 'react-native';
import {Marker} from 'react-native-maps';

import {styles} from '../../../Map.style';

import {ICONS} from '../../../../../../../utils/constants/Icons';

import {useMapContext} from '../../../_hooks_/useMapContext';

const MyPositionMarker: React.FC = () => {
  const {currentLocation} = useMapContext();

  return currentLocation ? (
    <Marker coordinate={currentLocation} style={styles.markerContainer}>
      <Image source={ICONS.myLocation} style={styles.pin} resizeMode="contain" />
    </Marker>
  ) : null;
};

export {MyPositionMarker};
