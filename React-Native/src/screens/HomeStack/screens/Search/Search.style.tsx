import {StyleSheet} from 'react-native';
import {COLORS} from '../../../../theme/Colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.beigeShade,
    padding: 20,
    flex: 1,
  },

  input: {
    flex: 1,
  },

  searchBar: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
  },

  backIconContainer: {
    width: 30,
    marginLeft: 10,
  },

  backIcon: {
    width: '100%',
  },

  searchResultContainer: {
    padding: 20,
  },

  restaurant: {
    marginTop: 5,
    marginBottom: 10,
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },

  restaurantInfo: {
    marginRight: 10,
    flex: 1,
  },

  restaurantImageContainer: {
    width: 70,
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
  },

  restaurantImage: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },

  noRestaurantImage: {
    width: '70%',
  },

  locationContainer: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginTop: -10,
  },

  locationIconContainer: {
    width: 20,
    marginLeft: 5,
  },

  locationIcon: {
    width: '70%',
  },
});

export {styles};
