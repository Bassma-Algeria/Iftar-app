import React from 'react';
import {
  TextInput,
  View,
  Pressable,
  Image,
  GestureResponderEvent,
  StyleProp,
  ViewStyle,
} from 'react-native';

import {styles} from '../Input.style';

import {Shadow} from 'react-native-shadow-2';

import {ICONS} from '../../../utils/constants/Icons';
import {Header} from '../../Header/Header';

interface Props {
  value: string;
  onTextChange: (text: string) => void;
  error?: string;
  placeholder: string;
  style?: StyleProp<ViewStyle>;
}

const PasswordInput: React.FC<Props> = props => {
  const [hidePassword, setHidePassword] = React.useState<boolean>(true);
  const handleHidePasswordChange = () => setHidePassword(!hidePassword);

  return (
    <>
      <Shadow distance={6} startColor={'#00000010'} containerViewStyle={props.style}>
        <View style={styles.inputContainer}>
          <EyeIcon
            hidePassword={hidePassword}
            handleHidePasswordChange={handleHidePasswordChange}
          />
          <TextInput
            style={styles.input}
            onChangeText={props.onTextChange}
            value={props.value}
            placeholder={props.placeholder}
            secureTextEntry={hidePassword}
          />
        </View>
      </Shadow>
      {!!props.error && (
        <Header color="red" align="right" variant="h6" fontWeight="regular">
          {props.error}
        </Header>
      )}
    </>
  );
};

interface IconProps {
  hidePassword: boolean;
  handleHidePasswordChange: (event: GestureResponderEvent) => void;
}

const EyeIcon: React.FC<IconProps> = ({hidePassword, handleHidePasswordChange}) => {
  return (
    <Pressable onPress={handleHidePasswordChange}>
      {hidePassword ? (
        <Image source={ICONS.closedEye} resizeMode="contain" />
      ) : (
        <Image source={ICONS.openEye} resizeMode="contain" />
      )}
    </Pressable>
  );
};
export {PasswordInput};
