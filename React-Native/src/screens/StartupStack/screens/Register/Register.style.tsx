import {StyleSheet} from 'react-native';
import {SPACING} from '../../../../theme/Spacings.ts';
import {COLORS} from '../../../../theme/Colors.ts';

const styles = StyleSheet.create({
  mainContainer: {
    height: '100%',
    width: '100%',
    backgroundColor: COLORS.green,
  },
  layout: {
    backgroundColor: 'black',
    width: '100%',
    height: '40%',
    marginTop: -80,
  },
  container: {
    alignItems: 'center',
    width: '100%',
  },
  inputsContainer: {
    width: '100%',
    height: '50%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  input: {
    height: 60,
    margin: 20,
    borderRadius: 10,
    padding: 10,
    backgroundColor: 'white',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    padding: SPACING.l,
  },
});

export {styles};
