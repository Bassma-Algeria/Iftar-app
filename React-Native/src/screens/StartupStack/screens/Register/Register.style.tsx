import {Dimensions, StyleSheet} from 'react-native';

const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    marginTop: windowHeight <= 700 ? -100 : -90,
  },

  form: {
    marginTop: 20,
  },

  buttonContainer: {
    marginTop: 30,
  },

  spaceInputs: {
    marginTop: 20,
    marginBottom: 10,
  },
  text: {
    textDecorationLine: 'underline',
  },
  registerButton: {
    marginTop: 60,
  },
});

export {styles};
