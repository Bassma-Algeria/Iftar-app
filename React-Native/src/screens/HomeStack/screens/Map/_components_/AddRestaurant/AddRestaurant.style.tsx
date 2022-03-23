import {StyleSheet} from 'react-native';
import {COLORS} from '../../../../../../theme/Colors';

const styles = StyleSheet.create({
  addRestaurantButtonContainer: {
    position: 'absolute',
    bottom: 0,
    padding: 10,
    paddingBottom: 20,
    width: '100%',
    zIndex: 1,
  },

  container: {
    justifyContent: 'space-between',
    minHeight: '95%',
  },

  inputsContainer: {
    padding: 20,
  },

  title: {
    maxWidth: '70%',
    marginBottom: 20,
    alignSelf: 'center',
  },

  input: {
    marginBottom: 20,
  },

  workTimesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  workTimeInput: {
    marginTop: 20,
    width: '45%',
  },

  picturesContainer: {
    width: '100%',
    marginTop: 20,
    marginBottom: 20,
  },

  addPicture: {
    width: '60%',
    height: 150,
    borderRadius: 20,
    borderStyle: 'dashed',
    borderWidth: 2,
    borderColor: COLORS.primary,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },

  addPictureIconContainer: {
    width: 30,
  },

  addPictureIcon: {
    width: '100%',
  },

  picture: {
    width: '60%',
    height: 200,
    borderRadius: 20,
  },

  confirmInfoButtonContainer: {
    marginTop: 20,
    padding: 20,
  },
});

export {styles};
