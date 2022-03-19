import React, {useEffect, useState} from 'react';
import {Polyline} from 'react-native-maps';

import {LocationCords} from '../../../../../../../../@types/LocationCords';
import {COLORS} from '../../../../../../../../theme/Colors';
import {useMapContext} from '../../../../_hooks_/useMapContext';
import {getDirections} from './_utils_/getDirection';

interface Props {
  currentLocation: LocationCords;
}

const PathToRestaurant: React.FC<Props> = ({currentLocation}) => {
  const {destinationCoords} = useMapContext();
  const [pathCoords, setPathCoords] = useState<LocationCords[]>();

  useEffect(() => {
    if (!destinationCoords) {
      return;
    }

    setPathCoords(undefined);
    getDirections({
      startLocation: currentLocation,
      destinationLocation: destinationCoords,
    }).then(setPathCoords);
  }, [currentLocation, destinationCoords]);

  return pathCoords ? (
    <Polyline
      coordinates={pathCoords}
      strokeColor={COLORS.orange}
      strokeWidth={5}
    />
  ) : null;
};

export {PathToRestaurant};
