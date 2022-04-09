import {StyleSheet} from 'react-native';
import {COLORS} from '../../../../../../theme/Colors';

const styles = StyleSheet.create({
  returnButton: {
    top: 20,
    right: 20,
    position: 'absolute',
  },

  loader: {
    padding: 30,
  },

  directionInfoContainer: {
    backgroundColor: COLORS.beige,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    position: 'absolute',
    bottom: 0,
    width: '100%',
    elevation: 20,
    shadowOffset: {height: -4, width: 0},
  },

  handleBar: {
    width: 80,
    height: 6,
    backgroundColor: COLORS.brownShade,
    borderRadius: 3,
    marginTop: 5,
    alignSelf: 'center',
  },

  directionInfoBody: {
    padding: 10,
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 20,
  },

  directionInfoButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 20,
  },

  infoButton: {
    width: '48%',
  },
});

export {styles};
