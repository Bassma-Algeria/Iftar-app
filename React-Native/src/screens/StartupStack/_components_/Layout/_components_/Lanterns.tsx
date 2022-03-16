import {View, Image} from 'react-native';
import React from 'react';

import {styles} from '../Layout.style';

import {IMAGES} from '../../../../../utils/constants/Images';

interface Props {}

const Lanterns: React.FC<Props> = () => {
  return (
    <View style={styles.latternsContainer}>
      <Image source={IMAGES.latterns1} style={styles.latterns} />
      <Image source={IMAGES.latterns2} style={styles.latterns} />
    </View>
  );
};

export {Lanterns};
