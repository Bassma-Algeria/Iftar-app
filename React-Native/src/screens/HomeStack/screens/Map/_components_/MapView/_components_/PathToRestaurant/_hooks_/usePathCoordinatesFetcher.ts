import {useState, useEffect} from 'react';

import type {LocationCords} from '../../../../../../../../../@types/LocationCords';

import {fetchDirectionCoords} from '../_utils_/fatchDirectionCoords';

const usePathCoordinatesFetcher = (
  startLocation?: LocationCords,
  destinationLocation?: LocationCords,
) => {
  const [coordinates, setCoordinates] = useState<LocationCords[]>();

  useEffect(() => {
    if (!destinationLocation || !startLocation) {
      return;
    }

    setCoordinates(undefined);
    fetchDirectionCoords({startLocation, destinationLocation}).then(
      setCoordinates,
    );
  }, [destinationLocation, startLocation]);

  return {coordinates};
};

export {usePathCoordinatesFetcher};
