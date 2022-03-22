import {StyleSheet} from 'react-native';

import {FONTS} from '../Header/Header.style';

const styles = StyleSheet.create({
  inputHolder: {
    width: '100%',
  },

  inputContainer: {
    paddingLeft: 20,
    paddingRight: 20,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 10,
    justifyContent: 'space-around',
  },

  input: {
    height: 60,
    width: '90%',
    borderRadius: 10,
    textAlign: 'right',
    fontFamily: FONTS.regular,
  },
});

export {styles};
