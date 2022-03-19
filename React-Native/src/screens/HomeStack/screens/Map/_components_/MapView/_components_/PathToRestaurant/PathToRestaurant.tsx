import React from 'react';
import {Polyline} from 'react-native-maps';

import {LocationCords} from '../../../../../../../../@types/LocationCords';
import {useMapContext} from '../../../../_hooks_/useMapContext';

interface Props {
  currentLocation: LocationCords;
}

const PathToRestaurant: React.FC<Props> = ({currentLocation}) => {
  const {destinationCoords} = useMapContext();
  console.log(destinationCoords);

  return destinationCoords ? (
    <Polyline coordinates={[currentLocation, destinationCoords]} />
  ) : null;
};

export {PathToRestaurant};
