import React from 'react';
import {GestureResponderEvent, StyleProp, Text, TextStyle} from 'react-native';

import {FONTS, styles} from './Header.style';

import {COLORS} from '../../theme/Colors';

interface Props {
  variant?: keyof typeof styles;
  color?: keyof typeof COLORS;
  fontWeight?: keyof typeof FONTS;
  style?: StyleProp<TextStyle>;
  align?: 'auto' | 'left' | 'right' | 'center' | 'justify';
  onPress?: (event: GestureResponderEvent) => void;
}

const Header: React.FC<Props> = ({
  children,
  variant = 'h6',
  color = 'brown',
  fontWeight,
  onPress,
  align,
  style,
}) => {
  let elementStyles: StyleProp<TextStyle> = {
    ...styles[variant],
    color: COLORS[color],
  };

  if (fontWeight) {
    elementStyles.fontFamily = FONTS[fontWeight];
  }

  if (align) {
    elementStyles.textAlign = align;
  }

  return (
    <Text onPress={onPress} style={[elementStyles, style]}>
      {children}
    </Text>
  );
};

export {Header};
