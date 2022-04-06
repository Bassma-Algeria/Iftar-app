import {Dimensions, StyleSheet} from 'react-native';

const screenHight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingTop: screenHight < 700 ? 50 : 100,
  },

  loader: {
    marginTop: 20,
  },
});

export {styles};
