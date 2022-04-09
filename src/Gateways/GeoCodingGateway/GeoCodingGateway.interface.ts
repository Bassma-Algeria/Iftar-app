import {LocationCords} from '../../@types/LocationCords';

export interface IGeoCodingGateway {
  getAdressNameOf(coords: LocationCords): Promise<string>;
}
