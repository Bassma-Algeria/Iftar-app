import {useEffect, useMemo, useRef} from 'react';
import {Animated} from 'react-native';

const useDetailsAnimation = (isDetailsOpen: boolean) => {
  const maxHeightValue = useRef(new Animated.Value(0)).current;

  const maxHeight = maxHeightValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 500],
  });

  const openDetails = useMemo(() => {
    return Animated.timing(maxHeightValue, {
      toValue: 1,
      useNativeDriver: false,
      duration: 400,
    }).start;
  }, [maxHeightValue]);

  const closeDetails = useMemo(() => {
    return Animated.timing(maxHeightValue, {
      toValue: 0,
      useNativeDriver: false,
      duration: 400,
    }).start;
  }, [maxHeightValue]);

  useEffect(() => {
    if (isDetailsOpen) {
      openDetails();
    } else {
      closeDetails();
    }
  }, [isDetailsOpen, openDetails, closeDetails]);

  return {maxHeight};
};

export {useDetailsAnimation};
