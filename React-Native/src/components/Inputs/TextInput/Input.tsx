import React from 'react';
import {
  TextInput,
  View,
  KeyboardTypeOptions,
  Image,
  ImageSourcePropType,
  StyleProp,
  ViewStyle,
} from 'react-native';

import {styles} from '../BaseInput.style';

import {BaseInput} from '../BaseInput';

interface Props {
  placeholder: string;
  icon: ImageSourcePropType;
  value: string;
  onTextChange: (text: string) => void;
  keyboardType?: KeyboardTypeOptions;
  iconPosition?: 'left' | 'right';
  style?: StyleProp<ViewStyle>;
  error?: string;
}

const Input: React.FC<Props> = props => {
  return (
    <BaseInput {...props}>
      <Icon icon={props.icon} position={props.iconPosition} />
      <TextInput
        style={styles.input}
        value={props.value}
        onChangeText={props.onTextChange}
        placeholder={props.placeholder}
        keyboardType={props.keyboardType}
      />
    </BaseInput>
  );
};

interface IconProps {
  icon: ImageSourcePropType;
  position?: 'left' | 'right';
}

const Icon: React.FC<IconProps> = ({icon, position}) => {
  let customStyle: StyleProp<ViewStyle> = {};

  if (position === 'right') {
    customStyle.marginLeft = 5;
  }

  return (
    <View style={[styles.iconContainer, customStyle]}>
      <Image source={icon} style={styles.icon} resizeMode="contain" />
    </View>
  );
};

export {Input};
