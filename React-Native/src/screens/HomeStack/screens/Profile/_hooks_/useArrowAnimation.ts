import {useEffect, useMemo, useRef} from 'react';
import {Animated} from 'react-native';

const useArrowAnimation = (toggleArrow: boolean) => {
  const rotateValue = useRef(new Animated.Value(0)).current;

  const rotate = rotateValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  const rotateArrowDown = useMemo(() => {
    return Animated.timing(rotateValue, {
      toValue: 0.5,
      useNativeDriver: true,
      duration: 400,
    }).start;
  }, [rotateValue]);

  const rotateArrowUp = useMemo(() => {
    return Animated.timing(rotateValue, {
      toValue: 1,
      useNativeDriver: true,
      duration: 400,
    }).start;
  }, [rotateValue]);

  useEffect(() => {
    if (toggleArrow) {
      rotateArrowDown();
    } else {
      rotateArrowUp();
    }
  }, [toggleArrow, rotateArrowDown, rotateArrowUp]);

  return {rotate};
};

export {useArrowAnimation};
