import React from 'react';
import {
  ImageSourcePropType,
  StyleProp,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import {Shadow} from 'react-native-shadow-2';

import {COLORS} from '../../theme/Colors';

import {Header} from '../Header/Header';

// styles
import {styles} from './Button.style';

interface Props {
  label: string;
  icon?: ImageSourcePropType;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
}

// TODO: add the icon configs when you need the button with icon
const Button: React.FC<Props> = ({onPress, label, style}) => {
  return (
    <Shadow
      viewStyle={styles.container}
      distance={4}
      startColor={COLORS.primaryShadow}>
      <TouchableOpacity
        style={[styles.button, style]}
        onPress={onPress}
        activeOpacity={0.8}>
        <Header color="whiteShade" variant="h4" fontWeight="semibold">
          {label}
        </Header>
      </TouchableOpacity>
    </Shadow>
  );
};

export {Button};
