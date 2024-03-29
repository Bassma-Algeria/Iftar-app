import {Config} from '@jest/types';

// Sync object
const config: Config.InitialOptions = {
  preset: 'react-native',
  verbose: true,
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  transformIgnorePatterns: [
    'node_modules/(?!(@react-native|react-native|react-clone-referenced-element|react-navigation|react-native-shadow-2|react-native-maps|react-native-geolocation-service|react-native-simple-toast|react-native-snap-carousel|react-native-image-picker|@react-native-community/datetimepicker|react-native-permissions|react-native-splash-screen)/)',
  ],
  transform: {
    '^.+\\.(ts|tsx)?$': 'ts-jest',
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/assetsTransformer.js',
  },
};
export default config;
