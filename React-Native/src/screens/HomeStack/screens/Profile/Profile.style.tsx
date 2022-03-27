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

  separator: {
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
    // alignItems: 'center',
  },
});

export {styles};
