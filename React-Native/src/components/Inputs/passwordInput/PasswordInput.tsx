import React from 'react';
import {
  TextInput,
  View,
  Pressable,
  Image,
  GestureResponderEvent,
} from 'react-native';

import {styles} from '../Input.style';

import {Shadow} from 'react-native-shadow-2';

import {ICONS} from '../../../utils/constants/Icons';

interface Props {
  label: string;
  password: string;
  setPassword: (e: string) => void;
}

const PasswordInput: React.FC<Props> = ({label, setPassword, password}) => {
  const [hidePassword, setHidePassword] = React.useState<boolean>(true);

  const handleHidePasswordChange = () => setHidePassword(!hidePassword);

  return (
    <View style={styles.inputHolder}>
      <Shadow distance={6} startColor={'#00000010'}>
        <View style={styles.inputContainer}>
          <EyeIcon
            hidePassword={hidePassword}
            handleHidePasswordChange={handleHidePasswordChange}
          />
          <TextInput
            style={styles.input}
            onChangeText={setPassword}
            value={password}
            placeholder={label}
            secureTextEntry={hidePassword}
          />
        </View>
      </Shadow>
    </View>
  );
};

interface IconProps {
  hidePassword: boolean;
  handleHidePasswordChange: (event: GestureResponderEvent) => void;
}

const EyeIcon: React.FC<IconProps> = ({
  hidePassword,
  handleHidePasswordChange,
}) => {
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
