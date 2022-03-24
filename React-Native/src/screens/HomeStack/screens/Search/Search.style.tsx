import {StyleSheet} from 'react-native';
import {COLORS} from '../../../../theme/Colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.beigeShade,
    padding: 20,
    flex: 1,
  },

  input: {
    flex: 1,
  },

  searchBar: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
  },

  backIconContainer: {
    width: 30,
    marginLeft: 10,
  },

  backIcon: {
    width: '100%',
  },
});

export {styles};
