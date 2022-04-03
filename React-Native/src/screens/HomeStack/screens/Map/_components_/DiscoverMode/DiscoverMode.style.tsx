import {Platform, StyleSheet} from 'react-native';
import {COLORS} from '../../../../../../theme/Colors';
import {NativeModules} from 'react-native';

const {StatusBarManager} = NativeModules;
const styles = StyleSheet.create({
  restaurantPopupLoader: {
    padding: 40,
  },

  restaurantTitle: {
    alignSelf: 'center',
    margin: 20,
    marginBottom: 30,
  },

  restaurantPic: {
    width: '100%',
    height: 230,
    borderRadius: 20,
  },

  picturesPlaceholder: {
    width: '90%',
    height: 200,
    borderRadius: 20,
    borderStyle: 'dashed',
    borderWidth: 6,
    borderColor: COLORS.primary,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },

  restaurantDetails: {
    padding: 35,
    paddingBottom: 20,
  },

  restaurantInfoItems: {
    marginBottom: 30,
  },

  restaurantInfoItem: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    marginBottom: 10,
  },

  itemIconContainer: {
    width: 25,
    alignItems: 'center',
    marginLeft: 10,
  },

  shadowContainer: {
    width: '100%',
  },

  topBarContainer: {
    paddingTop: Platform.OS === 'ios' ? StatusBarManager.HEIGHT : 0,
    position: 'absolute',
    top: 0,
    padding: 10,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    zIndex: 1,
  },

  searchBarContainer: {
    flex: 1,
    height: 60,
    borderRadius: 30,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: COLORS.white,
  },

  profileButton: {
    marginLeft: 5,
  },

  textIconContainer: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    flex: 1,
    flexDirection: 'row',
  },

  searchIconContainer: {
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },

  searchIcon: {
    width: '40%',
  },

  addRestaurantButtonContainer: {
    position: 'absolute',
    bottom: 0,
    padding: 10,
    paddingBottom: 20,
    width: '100%',
    zIndex: 1,
  },

  myLocationButtonTop: {
    marginTop: Platform.OS === 'ios' ? StatusBarManager.HEIGHT : 0,
    position: 'absolute',
    top: 100,
    right: 10,
  },

  myLocationButtonBottom: {
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
});

export {styles};
