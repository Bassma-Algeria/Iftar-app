import {StyleSheet} from 'react-native';
import {FONTS} from '../../../../components/Header/Header.style';
import {COLORS} from '../../../../theme/Colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.beige,
    flex: 1,
  },

  topHeadContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
    paddingBottom: 10,
    borderBottomColor: COLORS.brown,
    borderBottomWidth: 0.7,
  },

  profileIconContainer: {
    width: 27,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 15,
    bottom: 3,
  },

  profileIcon: {
    width: '80%',
  },

  content: {
    paddingTop: 30,
    padding: 20,
  },

  item: {},

  devider: {
    width: '80%',
    backgroundColor: COLORS.brown,
    alignSelf: 'center',
    height: 1,
    marginTop: 30,
    marginBottom: 30,
  },

  itemTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  arrowIconContainer: {
    marginLeft: 10,
    width: 18,
  },

  arrowIcon: {
    width: '100%',
  },

  title: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  titleIconContainer: {
    width: 30,
    marginLeft: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },

  titleIcon: {
    width: '70%',
  },

  itemDetailsInput: {
    marginTop: 20,
  },

  restaurantsListContainer: {
    paddingTop: 10,
  },

  popupContainer: {
    justifyContent: 'space-between',
    minHeight: '95%',
  },

  popupInputsContainer: {
    padding: 20,
  },

  popupTitle: {
    maxWidth: '70%',
    marginBottom: 20,
    marginTop: 20,
    alignSelf: 'center',
  },

  popupInput: {
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
