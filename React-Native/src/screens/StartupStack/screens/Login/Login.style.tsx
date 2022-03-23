import {Dimensions} from 'react-native';

import {StyleSheet} from 'react-native';

const windowHeight = Dimensions.get('window').height;
let margin: number;
if (windowHeight <= 700) {
  margin = -100;
} else {
  margin = -40;
}
const styles = StyleSheet.create({
  container: {
    marginTop: 30,
  },
  layout: {
    marginTop: margin,
  },
  form: {
    marginTop: 20,
  },
  buttonContainer: {
    marginTop: 70,
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
