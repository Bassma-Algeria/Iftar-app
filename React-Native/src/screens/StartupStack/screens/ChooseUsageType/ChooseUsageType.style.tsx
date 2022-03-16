import {StyleSheet} from 'react-native';
import {SPACING} from '../../../../theme/Spacings';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: '100%',
    marginTop: 30,
  },

  buttonsContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    padding: SPACING.l,
  },

  buttonsSeparator: {
    height: 30,
  },
});

export {styles};
