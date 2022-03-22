import {useCallback, useRef} from 'react';
import {Animated, Dimensions, Easing} from 'react-native';

const usePopupAnimation = (onClose?: Function) => {
  const screenHeight = Dimensions.get('window').height;

  const translateY = useRef(new Animated.Value(screenHeight)).current;

  const openPopup = useCallback(() => {
    Animated.timing(translateY, {
      toValue: 0,
      duration: 400,
      easing: Easing.circle,
      useNativeDriver: true,
    }).start();
  }, [translateY]);

  const closePopup = useCallback(() => {
    Animated.timing(translateY, {
      toValue: screenHeight,
      duration: 200,
      useNativeDriver: true,
    }).start();
    onClose?.();
  }, [translateY, screenHeight, onClose]);

  return {translateY, openPopup, closePopup};
};

export {usePopupAnimation};
