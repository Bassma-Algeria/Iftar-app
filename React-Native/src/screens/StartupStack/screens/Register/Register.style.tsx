import {Dimensions, StyleSheet} from 'react-native';

const windowHeight = Dimensions.get('window').height;
let margin: number;
if (windowHeight <= 700) {
  margin = -100;
} else {
  margin = -60;
}
const styles = StyleSheet.create({
  container: {
    marginTop: margin,
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
});

export {styles};
