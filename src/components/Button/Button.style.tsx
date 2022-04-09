import {StyleSheet} from 'react-native';

import {COLORS} from '../../theme/Colors';

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },

  button: {
    borderRadius: 30,
    width: '100%',
    height: 60,
    padding: 13,
    backgroundColor: COLORS.primary,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row-reverse',
  },

  iconContainer: {
    width: 18,
    marginRight: 20,
  },

  icon: {
    width: '100%',
  },
});

export {styles};
