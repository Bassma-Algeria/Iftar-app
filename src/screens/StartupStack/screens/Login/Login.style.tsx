import {Dimensions} from 'react-native';

import {StyleSheet} from 'react-native';

const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
  },

  layout: {
    marginTop: windowHeight <= 700 ? -100 : -40,
  },

  form: {
    marginTop: 20,
  },

  loginButton: {
    marginTop: 60,
  },

  text: {
    textDecorationLine: 'underline',
  },

  textSpacer: {
    marginTop: 10,
  },

  spaceInputs: {
    marginTop: 20,
    marginBottom: 10,
  },
});

export {styles};
