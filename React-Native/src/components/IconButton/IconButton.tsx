import React from 'react';
import {
  TouchableOpacity,
  ViewStyle,
  StyleProp,
  Image,
  ImageSourcePropType,
  ImageStyle,
} from 'react-native';
import {Shadow} from 'react-native-shadow-2';

import {COLORS} from '../../theme/Colors';

import {styles} from './IconButton.style';

interface Props {
  icon: ImageSourcePropType;
  style?: StyleProp<ViewStyle>;
  size?: number;
  iconWidthPercentage?: string;
  onPress?: () => void;
}

const IconButton: React.FC<Props> = ({icon, style, onPress, size, iconWidthPercentage}) => {
  let customStyle: StyleProp<ViewStyle> = {};
  let customIconStyle: StyleProp<ImageStyle> = {};

  if (size) {
    customStyle.width = size;
    customStyle.height = size;
  }

  if (iconWidthPercentage) {
    customIconStyle.width = iconWidthPercentage;
  }

  return (
    <Shadow containerViewStyle={style} startColor={COLORS.primaryShadow} distance={2}>
      <TouchableOpacity
        style={[styles.container, customStyle]}
        onPress={onPress}
        activeOpacity={0.9}>
        <Image source={icon} style={[styles.icon, customIconStyle]} resizeMode="contain" />
      </TouchableOpacity>
    </Shadow>
  );
};

export {IconButton};
