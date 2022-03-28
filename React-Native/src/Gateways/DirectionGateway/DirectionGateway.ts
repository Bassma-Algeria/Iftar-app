import {decode} from '@mapbox/polyline';

import {LocationCords} from '../../@types/LocationCords';
import {GoogleService} from '../_Helpers_/GoogleService';
import {IDirectionGateway} from './DirectionGateway.interface';

class GoogleDirectionGateway extends GoogleService implements IDirectionGateway {
  async getDirectionCoords(start: LocationCords, dest: LocationCords): Promise<LocationCords[]> {
    try {
      const resp = await fetch(this.getDirectionUrl(start, dest));
      const respJson = await resp.json();
      const points = decode(respJson.routes[0].overview_polyline.points);

      return points.map(([latitude, longitude]) => ({latitude, longitude}));
    } catch (error: any) {
      throw new Error(`Fetching Direction Error: ${error}`);
    }
  }

  private getDirectionUrl(start: LocationCords, dest: LocationCords): string {
    const startLoc = `${start.latitude},${start.longitude}`;
    const destLoc = `${dest.latitude},${dest.longitude}`;

    return `https://maps.googleapis.com/maps/api/directions/json?origin=${startLoc}&destination=${destLoc}&key=${this.API_KEY}`;
  }
}

export {GoogleDirectionGateway};
