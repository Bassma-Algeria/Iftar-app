import {StyleSheet} from 'react-native';
import {COLORS} from '../../../../theme/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  shadowContainer: {
    width: '100%',
  },

  topBarContainer: {
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

  map: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },

  mapLoadingMessage: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
    backgroundColor: COLORS.beige,
  },

  markerContainer: {
    alignItems: 'center',
  },

  pin: {
    width: 40,
    height: 40,
  },
});

const mapStyle = [
  {
    featureType: 'landscape',
    stylers: [
      {
        color: '#f9f6eb',
      },
    ],
  },
];

export {styles, mapStyle};
