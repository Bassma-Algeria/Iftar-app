import React from 'react';
import {Polyline} from 'react-native-maps';

import {LocationCords} from '../../../../../../../../@types/LocationCords';

import {COLORS} from '../../../../../../../../theme/Colors';

import {useMapContext} from '../../../../_hooks_/useMapContext';
import {usePathCoordinatesFetcher} from './_hooks_/usePathCoordinatesFetcher';

interface Props {
  currentLocation: LocationCords;
}

const PathToRestaurant: React.FC<Props> = ({currentLocation}) => {
  const {destinationLocation} = useMapContext();
  const {coordinates} = usePathCoordinatesFetcher(currentLocation, destinationLocation);

  return coordinates ? <Path coordinates={coordinates} /> : null;
};

interface PathProps {
  coordinates: LocationCords[];
}

const Path: React.FC<PathProps> = ({coordinates}) => {
  return <Polyline coordinates={coordinates} strokeColor={COLORS.orange} strokeWidth={5} />;
};

export {PathToRestaurant};
