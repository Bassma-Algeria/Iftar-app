import {StyleSheet} from 'react-native';
import {COLORS} from '../../theme/Colors';

const styles = StyleSheet.create({
  container: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: COLORS.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },

  icon: {
    width: '40%',
  },
});

export {styles};
