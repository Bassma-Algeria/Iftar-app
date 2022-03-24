import React from 'react';
import {TouchableOpacity, ViewStyle, StyleProp, Image, ImageSourcePropType} from 'react-native';
import {Shadow} from 'react-native-shadow-2';

import {COLORS} from '../../theme/Colors';

import {styles} from './IconButton.style';

interface Props {
  icon: ImageSourcePropType;
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
}

const IconButton: React.FC<Props> = ({icon, style, onPress}) => {
  return (
    <Shadow containerViewStyle={style} startColor={COLORS.primaryShadow} distance={2}>
      <TouchableOpacity style={styles.container} onPress={onPress} activeOpacity={0.95}>
        <Image source={icon} style={styles.icon} resizeMode="contain" />
      </TouchableOpacity>
    </Shadow>
  );
};

export {IconButton};
