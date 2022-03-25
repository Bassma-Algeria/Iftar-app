import {StyleSheet} from 'react-native';

import {COLORS} from '../../../../../../theme/Colors';

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
});

export {styles};
