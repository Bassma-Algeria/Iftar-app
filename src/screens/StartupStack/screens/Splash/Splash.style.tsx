import {Dimensions, StyleSheet} from 'react-native';
import {COLORS} from '../../../../theme/Colors';

const screenHight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingTop: screenHight < 700 ? 50 : 100,
  },

  loader: {
    marginTop: 40,
  },

  loaderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },

  loaderPoint: {
    width: 15,
    height: 15,
    borderRadius: 10,
    backgroundColor: COLORS.orange,
    marginLeft: 15,
    marginRight: 15,
  },
});

export {styles};
