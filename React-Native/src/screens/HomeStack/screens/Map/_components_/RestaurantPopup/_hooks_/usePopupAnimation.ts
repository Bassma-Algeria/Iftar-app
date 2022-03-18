import {useRef} from 'react';
import {Animated, Dimensions} from 'react-native';

const usePopupAnimation = () => {
  const screenHeight = Dimensions.get('screen').height;

  const translateY = useRef(new Animated.Value(screenHeight)).current;

  setTimeout(() => {
    Animated.timing(translateY, {
      toValue: 0,
      duration: 400,
      useNativeDriver: true,
    }).start();
  }, 2000);

  return {translateY};
};

export {usePopupAnimation};
