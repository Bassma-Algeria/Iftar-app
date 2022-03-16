import {StyleSheet} from 'react-native';

import {COLORS} from '../../theme/Colors';

const styles = StyleSheet.create({
  container: {
    borderRadius: 30,
    width: '100%',
    padding: 13,
    backgroundColor: COLORS.primary,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: COLORS.primary,
    elevation: 16,
    shadowOpacity: 0.6,
    shadowRadius: 40,
    shadowOffset: {
      height: 10,
      width: 10,
    },
  },
});

export {styles};
