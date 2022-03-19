import {StyleSheet} from 'react-native';

import {SPACING} from '../../../../theme/Spacings';
import {COLORS} from '../../../../theme/Colors';

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: COLORS.beige,
  },
  container: {
    alignItems: 'center',
    width: '100%',
  },

  buttonContainer: {
    padding: SPACING.l,
  },
});

export {styles};
