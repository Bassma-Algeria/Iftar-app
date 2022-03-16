import {StyleSheet} from 'react-native';

import {COLORS} from '../../theme/Colors';

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },

  button: {
    borderRadius: 30,
    width: '100%',
    padding: 13,
    backgroundColor: COLORS.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export {styles};
