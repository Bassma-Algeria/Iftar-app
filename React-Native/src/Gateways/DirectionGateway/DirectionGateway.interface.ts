import {LocationCords} from '../../@types/LocationCords';

export interface IDirectionGateway {
  getDirectionCoords(start: LocationCords, dest: LocationCords): Promise<LocationCords[]>;
}
