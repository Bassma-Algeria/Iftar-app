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

class MapBoxDirectionGateway implements IDirectionGateway {
  private ACCESS_TOKEN =
    'pk.eyJ1IjoieWFzc2VyLWJlbGF0cmVjaGUiLCJhIjoiY2wxYXo3cmczMG1pMDNic2VrMGMyZWRxZSJ9.cZkpSo_LoR4x4IuioUrYNg';

  async getDirectionCoords(start: LocationCords, dest: LocationCords): Promise<LocationCords[]> {
    try {
      const resp = await fetch(this.getDirectionUrl(start, dest));
      const respJson = await resp.json();

      console.log(respJson.routes[0].distance);

      return respJson.routes[0].geometry.coordinates.map(([longitude, latitude]: number[]) => ({
        latitude,
        longitude,
      }));
    } catch (error: any) {
      throw new Error(`Fetching Direction Error: ${error}`);
    }
  }

  private getDirectionUrl(start: LocationCords, dest: LocationCords): string {
    const startLoc = `${start.longitude},${start.latitude}`;
    const destLoc = `${dest.longitude},${dest.latitude}`;

    return `https://api.mapbox.com/directions/v5/mapbox/walking/${startLoc};${destLoc}?access_token=${this.ACCESS_TOKEN}&geometries=geojson`;
  }
}

export {GoogleDirectionGateway, MapBoxDirectionGateway};
