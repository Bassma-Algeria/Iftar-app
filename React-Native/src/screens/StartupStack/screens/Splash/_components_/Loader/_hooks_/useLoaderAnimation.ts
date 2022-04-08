import {useEffect, useRef} from 'react';
import {Animated} from 'react-native';

const useLoaderAnimation = (delay?: number) => {
  const scale = useRef(new Animated.Value(1)).current;

  const growAnim = Animated.timing(scale, {
    toValue: 1.35,
    useNativeDriver: true,
    duration: 400,
  });

  const shrinkAnim = Animated.timing(scale, {
    toValue: 1,
    useNativeDriver: true,
    duration: 400,
  });

  const noAnim = Animated.timing(scale, {
    toValue: 1,
    useNativeDriver: true,
    duration: 500,
  });

  useEffect(() => {
    setTimeout(() => {
      Animated.loop(Animated.sequence([growAnim, shrinkAnim, noAnim])).start();
    }, delay);
  }, [growAnim, shrinkAnim, noAnim, delay]);

  return {scale};
};

export {useLoaderAnimation};
