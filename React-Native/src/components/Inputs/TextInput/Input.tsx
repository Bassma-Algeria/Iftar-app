import React, {useEffect, useRef} from 'react';
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

import {COLORS} from '../../../theme/Colors';

import {BaseInput} from '../BaseInput';

interface Props {
  placeholder: string;
  value: string;
  onTextChange: (text: string) => void;
  icon?: ImageSourcePropType;
  keyboardType?: KeyboardTypeOptions;
  iconPosition?: 'left' | 'right';
  style?: StyleProp<ViewStyle>;
  error?: string;
  disable?: boolean;
  radius?: number;
  focused?: boolean;
}

const Input: React.FC<Props> = props => {
  const inputRef = useRef<TextInput>(null);

  useEffect(() => {
    if (props.focused) {
      inputRef.current?.focus();
    }
  }, [props.focused]);

  return (
    <BaseInput {...props}>
      <Icon icon={props.icon} position={props.iconPosition} />
      <TextInput
        style={styles.input}
        value={props.value}
        onChangeText={props.onTextChange}
        placeholder={props.placeholder}
        keyboardType={props.keyboardType}
        placeholderTextColor={COLORS.grey}
        editable={!props.disable}
        ref={inputRef}
      />
    </BaseInput>
  );
};

interface IconProps {
  icon?: ImageSourcePropType;
  position?: 'left' | 'right';
}

const Icon: React.FC<IconProps> = ({icon, position}) => {
  let customStyle: StyleProp<ViewStyle> = {};

  if (position === 'right') {
    customStyle.marginLeft = 5;
  }

  return icon ? (
    <View style={[styles.iconContainer, customStyle]}>
      <Image source={icon} style={styles.icon} resizeMode="contain" />
    </View>
  ) : null;
};

export {Input};
