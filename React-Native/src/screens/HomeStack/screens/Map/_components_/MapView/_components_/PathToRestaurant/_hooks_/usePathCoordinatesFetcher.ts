import {decode} from '@mapbox/polyline';
import {useState, useEffect} from 'react';

import type {LocationCords} from '../../../../../../../../../@types/LocationCords';
import {showToast} from '../../../../../../../../../utils/helpers/showToast';

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
    showToast('جاري البحث أفضل طريق ، يرجى الانتظار ...');

    fetchDirectionCoords({startLocation, destinationLocation})
      .then(setCoordinates)
      .catch(() => showToast('يرجى التحقق من اتصالك بالإنترنت'));
  }, [destinationLocation, startLocation]);

  return {coordinates};
};

interface Params {
  startLocation: LocationCords;
  destinationLocation: LocationCords;
}

const fetchDirectionCoords = async (params: Params) => {
  try {
    const resp = await fetch(getDirectionUrl(params));
    const respJson = await resp.json();
    const points = decode(respJson.routes[0].overview_polyline.points);

    return points.map(([latitude, longitude]) => ({latitude, longitude}));
  } catch (error: any) {
    throw new Error(`Fetching Direction Error: ${error}`);
  }
};

const getDirectionUrl = ({destinationLocation, startLocation}: Params) => {
  const KEY = 'AIzaSyDMUiPh6nBOeX30N3U3W1f0GjpX_idS6D8';
  const startLoc = `${startLocation.latitude},${startLocation.longitude}`;
  const destLoc = `${destinationLocation.latitude},${destinationLocation.longitude}`;

  return `https://maps.googleapis.com/maps/api/directions/json?origin=${startLoc}&destination=${destLoc}&key=${KEY}`;
};

export {usePathCoordinatesFetcher};
