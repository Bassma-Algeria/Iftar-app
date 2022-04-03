import React, {useEffect} from 'react';
import {View, Animated, Easing} from 'react-native';

import {styles} from './Logo.style';

import {ICONS} from '../../utils/constants/Icons';

import {Header} from '../Header/Header';

interface Props {
  animate?: boolean;
}

// TODO: add the animation to the moon in the logo
const Logo: React.FC<Props> = props => {
  return (
    <View>
      <View style={styles.container}>
        <Header variant="h1">إفطار</Header>
        <Moon {...props} />
      </View>
    </View>
  );
};

const Moon: React.FC<Props> = () => {
  let spinValue = new Animated.Value(0);

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '35deg'],
  });

  const animatedStyle = {
    transform: [{rotate: spin}],
  };

  const startAnimation = () => {
    Animated.timing(spinValue, {
      toValue: 1,
      duration: 300,
      easing: Easing.linear, // Easing is an additional import from react-native
      useNativeDriver: true, // To make use of native driver for performance
    }).start();
  };
  const endAnimation = () => {
    Animated.timing(spinValue, {
      toValue: 0,
      duration: 1600,
      easing: Easing.linear, // Easing is an additional import from react-native
      useNativeDriver: true, // To make use of native driver for performance
    }).start();
  };

  useEffect(() => {
    setInterval(() => {
      startAnimation();
      setTimeout(() => {
        endAnimation();
      }, 300);
    }, 2200);
  });
  return (
    <Animated.Image source={ICONS.moon} style={[styles.moon, animatedStyle]} resizeMode="contain" />
  );
};

export {Logo};
