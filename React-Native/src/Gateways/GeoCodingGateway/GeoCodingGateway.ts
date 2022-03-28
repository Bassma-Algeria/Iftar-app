import {LocationCords} from '../../@types/LocationCords';
import type {IGeoCodingGateway} from './GeoCodingGateway.interface';

class GoogleGeoCodingGateway implements IGeoCodingGateway {
  private API_KEY = 'AIzaSyDMUiPh6nBOeX30N3U3W1f0GjpX_idS6D8';

  async getAdressNameOf(coords: LocationCords): Promise<string> {
    try {
      const response = await fetch(this.getAdressUrl(coords));
      const {results} = await response.json();

      return results[0].formatted_address;
    } catch (error: any) {
      throw new Error(`Fetching Adress Error: ${error}`);
    }
  }

  private getAdressUrl({latitude, longitude}: LocationCords): string {
    const latlng = `${latitude},${longitude}`;

    return `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latlng}&sensor=true&language=ar&result_type=administrative_area_level_1|administrative_area_level_2&key=${this.API_KEY}`;
  }
}

class GeoapifyGeoCodingGateway implements IGeoCodingGateway {
  private API_KEY = 'd17308a160bb4c3f926743b0e4b8ac84';

  async getAdressNameOf(coords: LocationCords): Promise<string> {
    try {
      const response = await fetch(this.getAdressUrl(coords));
      const {features} = await response.json();

      return features[0].properties.formatted;
    } catch (error: any) {
      throw new Error(`Fetching Adress Error: ${error}`);
    }
  }

  private getAdressUrl({latitude, longitude}: LocationCords): string {
    return `https://api.geoapify.com/v1/geocode/reverse?lat=${latitude}&lon=${longitude}&apiKey=${this.API_KEY}&lang=ar`;
  }
}

export {GoogleGeoCodingGateway, GeoapifyGeoCodingGateway};
