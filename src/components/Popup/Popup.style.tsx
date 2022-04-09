import {Dimensions, StyleSheet} from 'react-native';
import {COLORS} from '../../theme/Colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.beige,
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    elevation: 40,
    shadowColor: COLORS.primary,
    zIndex: 3,
    maxHeight: Dimensions.get('window').height - 30,
  },

  overlay: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    backgroundColor: 'black',
  },

  topBar: {
    width: 80,
    height: 6,
    backgroundColor: COLORS.brownShade,
    borderRadius: 3,
    marginTop: 5,
    alignSelf: 'center',
  },
});

export {styles};
