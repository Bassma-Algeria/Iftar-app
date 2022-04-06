import axios from 'axios';
import {localStorage} from '../../utils/helpers/LocalStorage';
import {
  IRestaurantsGateway,
  RestaurantInfo,
  RestaurantInfoToAdd,
  RestaurantInMap,
} from './RestaurantsGateway.interface';

class RestaurantsGateway implements IRestaurantsGateway {
  private baseUrl: string = 'http://192.168.1.105:5000/api/restaurants';

  async getRestaurantInfo(id: string): Promise<RestaurantInfo & {ownerNumber: string}> {
    try {
      const {data} = await axios.get(`${this.baseUrl}/${id}`);

      return data.data;
    } catch (error: any) {
      throw error.response.data.error;
    }
  }

  async getRestaurantsOfAuthUser(): Promise<RestaurantInfo[]> {
    try {
      const token = await localStorage.get('token');
      const {data} = await axios.get(`${this.baseUrl}/myRestaurants`, {
        headers: {authorization: token as string},
      });

      return data.data;
    } catch (error: any) {
      throw error.response.data.error;
    }
  }

  async editRestaurant(info: RestaurantInfo): Promise<void> {
    try {
      const token = await localStorage.get('token');
      const {data} = await axios.put(`${this.baseUrl}/${info.restaurantId}`, info, {
        headers: {authorization: token as string},
      });

      return data.data;
    } catch (error: any) {
      throw error.response.data.error;
    }
  }

  async searchFor(keyword: string): Promise<RestaurantInfo[]> {
    try {
      const {data} = await axios.get(`${this.baseUrl}/search/${keyword}`);

      return data.data;
    } catch (error: any) {
      throw error.response.data.error;
    }
  }

  async addRestaurant(info: RestaurantInfoToAdd): Promise<void> {
    try {
      const token = await localStorage.get('token');
      const {data} = await axios.post(`${this.baseUrl}/add`, info, {
        headers: {authorization: token as string},
      });

      return data.data;
    } catch (error: any) {
      throw error.response.data.error;
    }
  }

  async getRestaurants(): Promise<RestaurantInMap[]> {
    try {
      const {data} = await axios.get(`${this.baseUrl}`);

      return data.data;
    } catch (error: any) {
      throw error.response.data.error;
    }
  }
}

export {RestaurantsGateway};
