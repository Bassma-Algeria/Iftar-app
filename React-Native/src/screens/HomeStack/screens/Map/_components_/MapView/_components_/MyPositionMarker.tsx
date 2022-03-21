import React from 'react';
import {Image} from 'react-native';
import {Marker} from 'react-native-maps';

import {styles} from '../../../Map.style';
import {LocationCords} from '../../../../../../../@types/LocationCords';
import {ICONS} from '../../../../../../../utils/constants/Icons';

const MyPositionMarker: React.FC<{coordinates: LocationCords}> = ({coordinates}) => {
  return (
    <Marker coordinate={coordinates} style={styles.markerContainer}>
      <Image source={ICONS.myLocation} style={styles.pin} resizeMode="contain" />
    </Marker>
  );
};

export {MyPositionMarker};
