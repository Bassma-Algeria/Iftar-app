import {decode} from '@mapbox/polyline';
import env from 'react-native-config';

import {LocationCords} from '../../@types/LocationCords';
import {GoogleService} from '../_Helpers_/GoogleService';
import {IDirectionGateway} from './DirectionGateway.interface';

class GoogleDirectionGateway extends GoogleService implements IDirectionGateway {
  async getDirection(start: LocationCords, dest: LocationCords) {
    try {
      const resp = await fetch(this.getDirectionUrl(start, dest));
      const respJson = await resp.json();
      const points = decode(respJson.routes[0].overview_polyline.points);

      const distance: number = respJson.routes[0].distance;
      const coordinates: LocationCords[] = points.map(([latitude, longitude]) => ({
        latitude,
        longitude,
      }));

      return {coordinates, distance};
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
  private ACCESS_TOKEN = env.MAPBOX_ACCESS_TOKEN;

  async getDirection(start: LocationCords, dest: LocationCords) {
    try {
      const resp = await fetch(this.getDirectionUrl(start, dest));
      const respJson = await resp.json();
      const points: [number, number][] = respJson.routes[0].geometry.coordinates;

      const distance: number = respJson.routes[0].distance.toFixed();

      const coordinates: LocationCords[] = points.map(([longitude, latitude]) => ({
        latitude,
        longitude,
      }));

      return {coordinates, distance};
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
