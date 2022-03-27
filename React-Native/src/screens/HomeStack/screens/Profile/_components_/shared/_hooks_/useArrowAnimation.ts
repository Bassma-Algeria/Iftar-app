import {useEffect, useMemo, useRef} from 'react';
import {Animated, Easing} from 'react-native';

const useArrowAnimation = (toggleArrow: boolean) => {
  const rotateValue = useRef(new Animated.Value(0)).current;

  const rotate = rotateValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '-180deg'],
  });

  const rotateArrowUp = useMemo(() => {
    return Animated.timing(rotateValue, {
      toValue: 1,
      useNativeDriver: true,
      duration: 300,
      easing: Easing.inOut(value => value),
    }).start;
  }, [rotateValue]);

  const rotateArrowDown = useMemo(() => {
    return Animated.timing(rotateValue, {
      toValue: 0,
      useNativeDriver: true,
      duration: 300,
      easing: Easing.inOut(value => value),
    }).start;
  }, [rotateValue]);

  useEffect(() => {
    if (toggleArrow) {
      rotateArrowUp();
    } else {
      rotateArrowDown();
    }
  }, [toggleArrow, rotateArrowDown, rotateArrowUp]);

  return {rotate};
};

export {useArrowAnimation};
