import {StyleSheet} from 'react-native';
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
    borderBottomWidth: 1,
  },

  profileIconContainer: {
    width: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
    bottom: 5,
  },

  profileIcon: {
    width: '80%',
  },

  content: {
    padding: 20,
  },
});

export {styles};
