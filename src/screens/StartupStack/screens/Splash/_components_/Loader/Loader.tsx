import React from 'react';
import {Animated, View} from 'react-native';

// import AnimatedLoader from 'react-native-animated-loader';

import {styles} from '../../Splash.style';
import {useLoaderAnimation} from './_hooks_/useLoaderAnimation';

interface Props {}

const Loader: React.FC<Props> = () => {
  return (
    <View style={styles.loaderContainer}>
      <FirstCircle />
      <SecondCircle />
      <ThirdCircle />
    </View>
  );
};

const FirstCircle: React.FC = () => {
  const {scale} = useLoaderAnimation();

  return <Animated.View style={[styles.loaderPoint, {transform: [{scale}]}]} />;
};

const SecondCircle: React.FC = () => {
  const {scale} = useLoaderAnimation(300);

  return <Animated.View style={[styles.loaderPoint, {transform: [{scale}]}]} />;
};

const ThirdCircle: React.FC = () => {
  const {scale} = useLoaderAnimation(600);

  return <Animated.View style={[styles.loaderPoint, {transform: [{scale}]}]} />;
};

export {Loader};
