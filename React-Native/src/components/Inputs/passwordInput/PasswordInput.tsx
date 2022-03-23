import React from 'react';
import {
  TextInput,
  Pressable,
  Image,
  GestureResponderEvent,
  StyleProp,
  ViewStyle,
} from 'react-native';

import {styles} from '../BaseInput.style';

import {ICONS} from '../../../utils/constants/Icons';

import {BaseInput} from '../BaseInput';

interface Props {
  value: string;
  onTextChange: (text: string) => void;
  error?: string;
  placeholder: string;
  style?: StyleProp<ViewStyle>;
}

const PasswordInput: React.FC<Props> = props => {
  const [hidePassword, setHidePassword] = React.useState<boolean>(true);
  const togglePassword = () => setHidePassword(!hidePassword);

  return (
    <BaseInput {...props}>
      <EyeIcon hidePassword={hidePassword} togglePassword={togglePassword} />
      <TextInput
        style={styles.input}
        onChangeText={props.onTextChange}
        value={props.value}
        placeholder={props.placeholder}
        secureTextEntry={hidePassword}
      />
    </BaseInput>
  );
};

interface IconProps {
  hidePassword: boolean;
  togglePassword: (event: GestureResponderEvent) => void;
}

const EyeIcon: React.FC<IconProps> = ({hidePassword, togglePassword}) => {
  return (
    <Pressable onPress={togglePassword}>
      {hidePassword ? (
        <Image source={ICONS.closedEye} resizeMode="contain" />
      ) : (
        <Image source={ICONS.openEye} resizeMode="contain" />
      )}
    </Pressable>
  );
};

export {PasswordInput};
