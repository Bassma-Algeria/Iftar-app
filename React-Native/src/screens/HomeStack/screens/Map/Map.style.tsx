import {StyleSheet} from 'react-native';
import {COLORS} from '../../../../theme/Colors';
import {SPACING} from '../../../../theme/Spacings';

const styles = StyleSheet.create({
  container: {
    flex: 1,
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

  popupTopBar: {
    width: 80,
    height: 6,
    backgroundColor: COLORS.brownShade,
    borderRadius: 3,
    marginTop: 5,
    alignSelf: 'center',
  },

  popupOverlay: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: 2,
    top: 0,
  },

  restaurantPopupContainer: {
    backgroundColor: COLORS.beige,
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    elevation: 40,
    shadowColor: COLORS.primaryShadow,
    zIndex: 3,
  },

  loader: {
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
  },

  itemIconContainer: {
    width: 25,
    alignItems: 'center',
    marginLeft: 10,
  },

  itemIcon: {
    width: '100%',
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
