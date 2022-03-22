import {Dimensions, StyleSheet} from 'react-native';
import {COLORS} from '../../theme/Colors';

const styles = StyleSheet.create({
  container: {
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
    maxHeight: Dimensions.get('window').height,
  },

  overlay: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: 2,
    top: 0,
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
