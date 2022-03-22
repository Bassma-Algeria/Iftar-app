import React from 'react';
import {
  Image,
  ImageSourcePropType,
  StyleProp,
  TouchableOpacity,
  View,
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

const Button: React.FC<Props> = ({onPress, label, icon, style}) => {
  return (
    <Shadow viewStyle={styles.container} startColor={COLORS.primaryShadow} distance={4}>
      <TouchableOpacity style={[styles.button, style]} onPress={onPress} activeOpacity={0.8}>
        <Header color="whiteShade" variant="h4" fontWeight="semibold">
          {label}
        </Header>

        {icon && <Icon icon={icon} />}
      </TouchableOpacity>
    </Shadow>
  );
};

const Icon: React.FC<{icon: ImageSourcePropType}> = ({icon}) => {
  return (
    <View style={styles.iconContainer}>
      <Image source={icon} resizeMode="contain" style={styles.icon} />
    </View>
  );
};

export {Button};
