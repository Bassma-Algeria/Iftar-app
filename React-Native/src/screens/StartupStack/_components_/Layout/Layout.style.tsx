import {StyleSheet} from 'react-native';

import {COLORS} from '../../../../theme/Colors';
import {SPACING} from '../../../../theme/Spacings';

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.green,
    width: '100%',
    height: '100%',
  },

  content: {
    flex: 1,
    marginTop: 280,
    padding: SPACING.l,
  },

  latternsContainer: {
    position: 'absolute',
    top: 0,
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
