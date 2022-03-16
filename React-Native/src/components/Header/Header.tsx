import React from 'react';
import {StyleProp, Text, TextStyle} from 'react-native';

import {FONTS, styles} from './Header.style';

import {COLORS} from '../../theme/Colors';

import type {Props} from './Header.types';

const Header: React.FC<Props> = ({
  children,
  variant = 'h6',
  color = 'brown',
  fontWeight,
  onPress,
  style,
}) => {
  let elementStyles: StyleProp<TextStyle> = {
    ...styles[variant],
    color: COLORS[color],
  };

  if (fontWeight) {
    elementStyles.fontFamily = FONTS[fontWeight];
  }

  return (
    <Text onPress={onPress} style={[elementStyles, style]}>
      {children}
    </Text>
  );
};

export {Header};
