import {StyleSheet} from 'react-native';
import {FONTS} from '../../../../../../components/Header/Header.style';
import {COLORS} from '../../../../../../theme/Colors';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    minHeight: '100%',
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

  locationInput: {
    flex: 1,
    textAlign: 'right',
    fontFamily: FONTS.regular,
    color: COLORS.black,
  },

  locationIconContainer: {
    width: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },

  locationIcon: {
    width: '70%',
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
    marginTop: 20,
    height: 180,
  },

  addPicture: {
    width: '100%',
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
    width: '100%',
    height: 150,
    borderRadius: 20,
  },

  deletePicButtonContainer: {
    position: 'absolute',
    bottom: -40,
    right: 20,
    flexDirection: 'row',
    alignItems: 'center',
    zIndex: 2,
  },

  deleteIcon: {
    width: 20,
    marginLeft: 10,
  },

  confirmInfoButtonContainer: {
    marginTop: 20,
    padding: 20,
  },
});

export {styles};
