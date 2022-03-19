import {useCallback, useEffect, useRef} from 'react';
import {Animated, Dimensions, Easing} from 'react-native';

import {RestaurantInfo} from '../../../../../../../Gateways/RestaurantsGateway/RestaurantsGateway.interface';

const usePopupAnimation = (restaurantId: RestaurantInfo | undefined) => {
  const screenHeight = Dimensions.get('screen').height;

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
  }, [translateY, screenHeight]);

  useEffect(() => {
    if (restaurantId) {
      openPopup();
    } else {
      closePopup();
    }
  }, [closePopup, openPopup, restaurantId]);

  return {translateY};
};

export {usePopupAnimation};
