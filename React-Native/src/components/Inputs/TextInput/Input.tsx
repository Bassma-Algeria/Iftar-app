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
      <Icon icon={props.icon} />
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

const Icon: React.FC<{icon: ImageSourcePropType}> = ({icon}) => {
  return (
    <View style={styles.iconContainer}>
      <Image source={icon} style={styles.icon} resizeMode="contain" />
    </View>
  );
};

export {Input};
