import React from 'react';
import {StyleProp, ViewStyle} from 'react-native';
import {ImageSourcePropType, TouchableOpacity} from 'react-native';

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
    <TouchableOpacity
      style={[styles.container, style]}
      onPress={onPress}
      activeOpacity={0.8}>
      <Header color="whiteShade" variant="h4" fontWeight="semibold">
        {label}
      </Header>
    </TouchableOpacity>
  );
};

export {Button};
