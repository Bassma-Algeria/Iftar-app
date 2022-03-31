import {LocationCords} from '../../@types/LocationCords';

export interface IDirectionGateway {
  getDirection(
    start: LocationCords,
    dest: LocationCords,
  ): Promise<{coordinates: LocationCords[]; distance: number}>;
}
