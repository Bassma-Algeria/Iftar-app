import {Platform, StyleSheet} from 'react-native';
import {COLORS} from '../../../../theme/Colors';
import {NativeModules} from 'react-native';

// ...

const {StatusBarManager} = NativeModules;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.beige,
    //paddingBottom: Platform.OS === 'ios' ? -StatusBarManager.HEIGHT : 0,
    flex: 1,
  },

  map: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },

  mapLoadingMessage: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
    backgroundColor: COLORS.beige,
  },

  markerContainer: {
    alignItems: 'center',
  },

  pin: {
    width: 40,
    height: 40,
  },
});

const mapStyle = [
  {
    featureType: 'landscape',
    stylers: [
      {
        color: '#f9f6eb',
      },
    ],
  },
];

export {styles, mapStyle};
