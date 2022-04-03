import {Dimensions, Platform, StyleSheet} from 'react-native';
import {COLORS} from '../../../../theme/Colors';
import {SPACING} from '../../../../theme/Spacings';
import {NativeModules} from 'react-native';

const {StatusBarManager} = NativeModules;
const screenHight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingTop: screenHight < 700 ? 50 : 100,
  },
  mainContainer: {
    backgroundColor: COLORS.beige,
    width: '100%',
    height: '100%',
    paddingTop: Platform.OS === 'ios' ? StatusBarManager.HEIGHT : 0,
  },

  content: {
    flex: 1,
    marginTop: '60%',
    padding: SPACING.l,
  },

  latternsContainer: {
    position: 'absolute',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-around',
  },

  latterns: {
    maxWidth: 200,
  },
});

export {styles};
