import React from 'react';
import {Image, ScrollView, View} from 'react-native';

import {IMAGES} from '../../../../utils/constants/Images';

import {styles} from './Layout.style';

interface Props {}

const Layout: React.FC<Props> = ({children}) => {
  return (
    <ScrollView style={styles.container}>
      <Lanterns />

      <View style={styles.content}>{children}</View>
    </ScrollView>
  );
};

// TODO: add the animation
const Lanterns: React.FC<Props> = () => {
  return (
    <View style={styles.latternsContainer}>
      <Image
        source={IMAGES.latterns1}
        style={styles.latterns}
        resizeMode="contain"
      />
      <Image
        source={IMAGES.latterns2}
        style={styles.latterns}
        resizeMode="contain"
      />
    </View>
  );
};

export {Layout};
