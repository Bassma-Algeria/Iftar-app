import {decode} from '@mapbox/polyline';

import {LocationCords} from '../../../../../../../../../@types/LocationCords';

interface Params {
  startLocation: LocationCords;
  destinationLocation: LocationCords;
}

const getDirections = async (params: Params): Promise<LocationCords[]> => {
  try {
    const KEY = 'AIzaSyCPoVKbYZ1VDQGzSBsZaAXATVNhNYATwi0';

    const startLoc = `${params.startLocation.latitude},${params.startLocation.longitude}`;
    const destLoc = `${params.destinationLocation.latitude},${params.destinationLocation.longitude}`;

    const resp = await fetch(
      `https://maps.googleapis.com/maps/api/directions/json?origin=${startLoc}&destination=${destLoc}&key=${KEY}`,
    );
    const respJson = await resp.json();
    const points = decode(respJson.routes[0].overview_polyline.points);

    const coords = points.map(point => {
      return {
        latitude: point[0],
        longitude: point[1],
      };
    });
    return coords;
  } catch (error: any) {
    throw new Error(error);
  }
};

export {getDirections};
