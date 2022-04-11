import {Dimensions, StyleSheet} from 'react-native';

const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    marginTop: windowHeight <= 850 ? -110 : -60,
  },

  form: {
    marginTop: 20,
  },

  buttonContainer: {
    marginTop: 30,
  },

  spaceInputs: {
    marginTop: windowHeight <= 850 ? 20 : 10,
    marginBottom: windowHeight <= 850 ? 10 : 5,
  },

  text: {
    textDecorationLine: 'underline',
  },

  registerButton: {
    marginTop: 60,
  },
});

export {styles};
