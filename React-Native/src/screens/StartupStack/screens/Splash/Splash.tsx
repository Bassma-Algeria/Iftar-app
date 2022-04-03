import React, {useCallback, useEffect} from 'react';
import {Animated, ScrollView, View} from 'react-native';

import {styles} from './Splash.style';

import {MainStackScreenProps} from '../../../MainStack.types';

import {useAuthContext} from '../../../_hooks_/useAuthContext';
import {localStorage} from '../../../../utils/helpers/LocalStorage';
import {Logo} from '../../../../components/Logo/Logo';
import {IMAGES} from '../../../../utils/constants/Images';

interface Props extends MainStackScreenProps<'StartupStack'> {}

const Splash: React.FC<Props> = ({navigation}) => {
  const {setIsRestaurantOwner} = useAuthContext();

  const setup = useCallback(async () => {
    const isFirstTime = await localStorage.get('firstTime');
    if (!isFirstTime) {
      setTimeout(() => {
        return navigation.replace('StartupStack', {screen: 'Welcom'});
      }, 2000);
    }

    const token = await localStorage.get('token');
    setTimeout(() => {
      navigation.replace('StartupStack', {screen: 'ChooseUsageType'});
    }, 2000);

    if (!token) {
      return;
    }

    setIsRestaurantOwner(true);
    navigation.navigate('HomeStack', {screen: 'Map'});
  }, [navigation, setIsRestaurantOwner]);

  useEffect(() => {
    setup();
  }, [setup]);

  return (
    <ScrollView style={styles.mainContainer}>
      <AnimatedLanterns />

      <View style={styles.content}>
        <View style={styles.container}>
          <Logo />
        </View>
      </View>
    </ScrollView>
  );
};

const AnimatedLanterns: React.FC = () => {
  let animationState1 = {
    animation: new Animated.Value(-300),
  };

  let animationState2 = {
    animation: new Animated.Value(-300),
  };

  const animatedStyle1 = {
    transform: [{translateY: animationState1.animation}],
  };

  const animatedStyle2 = {
    transform: [{translateY: animationState2.animation}],
  };

  const startAnimation = () => {
    Animated.timing(animationState1.animation, {
      toValue: -30,
      duration: 1500,
      useNativeDriver: false,
    }).start();
    Animated.timing(animationState2.animation, {
      toValue: -30,
      duration: 1800,
      useNativeDriver: false,
    }).start();
  };

  useEffect(() => {
    startAnimation();
  });
  return (
    <View style={styles.latternsContainer}>
      <Animated.Image
        source={IMAGES.latterns1}
        style={[styles.latterns, animatedStyle1]}
        resizeMode="contain"
      />
      <Animated.Image
        source={IMAGES.latterns2}
        style={[styles.latterns, animatedStyle2]}
        resizeMode="contain"
      />
    </View>
  );
};
export {Splash};
