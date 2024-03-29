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
  icon?: ImageSourcePropType;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
  inactive?: boolean;
}

const Button: React.FC<Props> = ({onPress, children, icon, inactive, style}) => {
  const customStyles: StyleProp<ViewStyle> = {};

  if (inactive) {
    customStyles.opacity = 0.6;
  }

  const handlePress = () => {
    if (!inactive) {
      onPress?.();
    }
  };

  return (
    <View style={[style, customStyles]}>
      <Shadow viewStyle={styles.container} startColor={COLORS.primaryShadow} distance={2}>
        <TouchableOpacity style={styles.button} onPress={handlePress} activeOpacity={0.9}>
          <Header color="whiteShade" variant="h4" fontWeight="semibold">
            {children}
          </Header>

          {icon && <Icon icon={icon} />}
        </TouchableOpacity>
      </Shadow>
    </View>
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
