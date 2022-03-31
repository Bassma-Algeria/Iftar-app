import React, {useEffect} from 'react';
import {Polyline} from 'react-native-maps';

import {LocationCords} from '../../../../../../../../@types/LocationCords';

import {COLORS} from '../../../../../../../../theme/Colors';

import {useDirectionModeContext} from '../../../../_hooks_/useDirectionModeContext';
import {useMapContext} from '../../../../_hooks_/useMapContext';
import {useDirectionFetcher} from './_hooks_/useDirectionFetcher';

const PathToRestaurant: React.FC = () => {
  const {destinationLocation, setDistance} = useDirectionModeContext();
  const {currentLocation} = useMapContext();
  const {coordinates, distance} = useDirectionFetcher(currentLocation, destinationLocation);

  useEffect(() => {
    setDistance(distance);
  }, [setDistance, distance]);

  return destinationLocation && coordinates ? <Path coordinates={coordinates} /> : null;
};

interface PathProps {
  coordinates: LocationCords[];
}

const Path: React.FC<PathProps> = ({coordinates}) => {
  const {destinationLocation} = useDirectionModeContext();
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
