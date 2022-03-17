interface RestaurantInfo {
  restaurantId: string;
  name: string;
  ownerName: string;
  openingTime: Date;
  closingTime: Date;
  pictures: string[];
  location: {latitude: number; longitude: number};
}

export interface IRestaurantsGateway {
  getRestaurants(): Promise<RestaurantInfo[]>;
  addRestaurant(info: RestaurantInfo): Promise<void>;
  searchFor(keyword: string): Promise<RestaurantInfo | undefined>;
}
