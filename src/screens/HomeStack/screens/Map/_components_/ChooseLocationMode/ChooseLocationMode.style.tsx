import {StyleSheet} from 'react-native';
import {COLORS} from '../../../../../../theme/Colors';

const styles = StyleSheet.create({
  bannerContainer: {
    backgroundColor: COLORS.beige,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    position: 'absolute',
    bottom: 0,
    width: '100%',
    minHeight: 200,
    elevation: 20,
    shadowOffset: {height: -4, width: 0},
  },

  bannerHandleBar: {
    width: 80,
    height: 6,
    backgroundColor: COLORS.brownShade,
    borderRadius: 3,
    marginTop: 5,
    alignSelf: 'center',
  },

  bannerBody: {
    padding: 10,
    alignItems: 'center',
    paddingTop: 30,
    paddingBottom: 20,
    justifyContent: 'center',
    flex: 1,
  },

  confirmButton: {
    marginTop: 30,
    width: '100%',
  },
});

export {styles};
