import {useCallback, useRef, useState} from 'react';
import {Animated, Dimensions, Easing} from 'react-native';

const usePopupAnimation = (onOpen?: Function, onClose?: Function) => {
  const screenHeight = Dimensions.get('window').height;

  const [isPopupOpened, setIsPopupOpened] = useState(false);
  const translateY = useRef(new Animated.Value(screenHeight)).current;

  const openPopup = useCallback(() => {
    Animated.timing(translateY, {
      toValue: 0,
      duration: 400,
      easing: Easing.circle,
      useNativeDriver: true,
    }).start();
    onOpen?.();
    setIsPopupOpened(true);
  }, [translateY, onOpen]);

  const closePopup = useCallback(() => {
    Animated.timing(translateY, {
      toValue: screenHeight,
      duration: 200,
      useNativeDriver: true,
    }).start();
    onClose?.();
    setIsPopupOpened(false);
  }, [translateY, screenHeight, onClose]);

  return {translateY, openPopup, closePopup, isPopupOpened};
};

export {usePopupAnimation};
