jest.useFakeTimers();

jest.mock('react-native-simple-toast', () => ({
  SHORT: '',
  show: () => {},
}));

export {};
