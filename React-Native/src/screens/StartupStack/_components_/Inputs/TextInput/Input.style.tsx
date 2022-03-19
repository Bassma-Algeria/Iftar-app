import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  inputContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '85%',
    backgroundColor: 'white',
    borderRadius: 10,
    justifyContent: 'space-around',
  },
  input: {
    height: 60,
    width: '80%',
    borderRadius: 10,
    padding: 10,
    backgroundColor: 'white',
    textAlign: 'right',
  },
});

export {styles};
