import React, {useEffect} from 'react';
import {Polyline} from 'react-native-maps';

import {LocationCords} from '../../../../../../../../@types/LocationCords';

import {COLORS} from '../../../../../../../../theme/Colors';

import {useDiscoverModeContext} from '../../../../_hooks_/useDiscoverModeContext';
import {useMapContext} from '../../../../_hooks_/useMapContext';
import {usePathCoordinatesFetcher} from './_hooks_/usePathCoordinatesFetcher';

const PathToRestaurant: React.FC = () => {
  const {destinationLocation} = useDiscoverModeContext();
  const {currentLocation} = useMapContext();
  const {coordinates} = usePathCoordinatesFetcher(currentLocation, destinationLocation);

  return coordinates ? <Path coordinates={coordinates} /> : null;
};

interface PathProps {
  coordinates: LocationCords[];
}

const Path: React.FC<PathProps> = ({coordinates}) => {
  const {destinationLocation} = useDiscoverModeContext();
  const {currentLocation, mapRef} = useMapContext();

  useEffect(() => {
    if (!coordinates || !destinationLocation || !currentLocation) {
      return;
    }

    const latitude = (destinationLocation.latitude + currentLocation.latitude) / 2;
    const longitude = (destinationLocation.longitude + currentLocation.longitude) / 2;
    const latitudeDelta = 0.06;
    const longitudeDelta = 0.01;

    mapRef.current?.animateToRegion({latitude, longitude, latitudeDelta, longitudeDelta}, 400);
  }, [coordinates, destinationLocation, currentLocation, mapRef]);

  return <Polyline coordinates={coordinates} strokeColor={COLORS.orange} strokeWidth={5} />;
};

export {PathToRestaurant};
