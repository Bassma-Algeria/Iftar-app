import React from 'react';
import {View, Animated} from 'react-native';

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
  return (
    <Animated.Image
      source={ICONS.moon}
      style={[styles.moon, {transform: [{rotate: '0deg'}]}]}
      resizeMode="contain"
    />
  );
};

export {Logo};
