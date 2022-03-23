import {StyleSheet} from 'react-native';

import {FONTS} from '../Header/Header.style';

const styles = StyleSheet.create({
  inputContainer: {
    paddingLeft: 18,
    paddingRight: 20,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 10,
    justifyContent: 'space-between',
    height: 60,
  },

  input: {
    flex: 1,
    textAlign: 'right',
    fontFamily: FONTS.regular,
  },

  iconContainer: {
    width: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },

  icon: {
    width: '70%',
  },

  errorText: {
    paddingRight: 15,
    fontSize: 12,
    marginTop: -5,
  },
});

export {styles};
