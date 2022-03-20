import {decode} from '@mapbox/polyline';

import type {LocationCords} from '../../../../../../../../../@types/LocationCords';

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
  const KEY = 'AIzaSyCPoVKbYZ1VDQGzSBsZaAXATVNhNYATwi0';

  const startLoc = `${startLocation.latitude},${startLocation.longitude}`;
  const destLoc = `${destinationLocation.latitude},${destinationLocation.longitude}`;

  return `https://maps.googleapis.com/maps/api/directions/json?origin=${startLoc}&destination=${destLoc}&key=${KEY}`;
};

export {fetchDirectionCoords};
