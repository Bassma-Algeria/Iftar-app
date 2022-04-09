import {useCallback, useEffect, useRef} from 'react';
import {Animated, Dimensions, Easing} from 'react-native';

const usePopupAnimation = (isOpen: boolean) => {
  const screenHeight = Dimensions.get('window').height;

  const translateY = useRef(new Animated.Value(screenHeight)).current;
  const overlayOpacity = useRef(new Animated.Value(0)).current;

  const openPopup = useCallback(() => {
    Animated.timing(translateY, {
      toValue: 0,
      duration: 400,
      easing: Easing.circle,
      useNativeDriver: true,
    }).start();

    Animated.timing(overlayOpacity, {
      toValue: 0.5,
      duration: 400,
      easing: Easing.circle,
      useNativeDriver: true,
    }).start();
  }, [translateY, overlayOpacity]);

  const closePopup = useCallback(() => {
    Animated.timing(translateY, {
      toValue: screenHeight,
      duration: 200,
      useNativeDriver: true,
    }).start();

    Animated.timing(overlayOpacity, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
    }).start();
  }, [screenHeight, translateY, overlayOpacity]);

  useEffect(() => {
    if (isOpen) {
      openPopup();
    } else {
      closePopup();
    }
  }, [isOpen, openPopup, closePopup]);

  return {translateY, overlayOpacity};
};

export {usePopupAnimation};
