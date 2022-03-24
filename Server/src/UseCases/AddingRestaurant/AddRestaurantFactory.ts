interface RestaurantInfo {
  name: string;
  ownerToken: string;
  openingTime: {
    hour: number;
    minute: number;
  };
  closingTime: {
    hour: number;
    minute: number;
  };
  locationName: string;
}

class AddRestauantFactory {
  constructor() {}
  async add(restaurantInfo: RestaurantInfo) {}
}
export { AddRestauantFactory };
