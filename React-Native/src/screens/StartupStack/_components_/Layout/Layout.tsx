import React from 'react';
import {Image, ScrollView, StyleProp, View, ViewStyle} from 'react-native';

import {IMAGES} from '../../../../utils/constants/Images';

import {styles} from './Layout.style';

interface Props {
  style?: StyleProp<ViewStyle>;
}

const Layout: React.FC<Props> = ({children, style}) => {
  return (
    <ScrollView style={[styles.container, style]}>
      <Lanterns />

      <View style={styles.content}>{children}</View>
    </ScrollView>
  );
};

const Lanterns: React.FC<Props> = () => {
  return (
    <View style={styles.latternsContainer}>
      <Image source={IMAGES.latterns1} style={styles.latterns} resizeMode="contain" />
      <Image source={IMAGES.latterns2} style={styles.latterns} resizeMode="contain" />
    </View>
  );
};

export {Layout};
