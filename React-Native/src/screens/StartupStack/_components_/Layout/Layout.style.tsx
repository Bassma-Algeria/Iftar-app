import {StyleSheet} from 'react-native';

import {COLORS} from '../../../../theme/Colors';
import {SPACING} from '../../../../theme/Spacings';

const styles = StyleSheet.create({
  background: {
    backgroundColor: COLORS.green,
    width: '100%',
    height: '100%',
  },

  content: {
    padding: SPACING.l,
  },

  latternsContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-around',
  },

  latterns: {
    maxWidth: 200,
  },
});

export {styles};
