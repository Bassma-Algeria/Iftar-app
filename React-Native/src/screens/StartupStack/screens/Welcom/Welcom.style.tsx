import {StyleSheet} from 'react-native';
import {SPACING} from '../../../../theme/Spacings';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: '100%',
    flex: 1,
  },

  desc: {
    width: '80%',
  },

  descText: {
    textAlign: 'center',
    marginTop: 20,
  },

  buttonContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    padding: SPACING.l,
  },
});

export {styles};
