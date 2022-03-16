import {GestureResponderEvent, StyleProp, TextStyle} from 'react-native';

import {FONTS, styles} from './Header.style';

import {COLORS} from '../../theme/Colors';

export interface Props {
  variant?: keyof typeof styles;
  color?: keyof typeof COLORS;
  fontWeight?: keyof typeof FONTS;
  style?: StyleProp<TextStyle>;
  onPress?: (event: GestureResponderEvent) => void;
}
