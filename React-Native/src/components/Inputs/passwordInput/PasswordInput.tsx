import React, {useState} from 'react';
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
  label: string;
  password: string;
  setPassword: (e: string) => void;
  style?: StyleProp<ViewStyle>;
}

const PasswordInput: React.FC<Props> = ({label, setPassword, password, style}) => {
  const [hidePassword, setHidePassword] = React.useState<boolean>(true);
  const [inputError, setinputError] = useState<string>('');
  const setInput = (t: string) => {
    if (!t) {
      setinputError('Password cannot be empty');
    } else {
      setinputError('');
    }
    setPassword(t);
  };
  const setInputError = () => {
    if (!password) {
      setinputError('Password cannot be empty');
    } else {
      setinputError('');
    }
  };
  const handleHidePasswordChange = () => setHidePassword(!hidePassword);

  return (
    <>
      <View style={[styles.inputHolder, style]}>
        <Shadow distance={6} startColor={'#00000010'}>
          <View style={styles.inputContainer}>
            <EyeIcon
              hidePassword={hidePassword}
              handleHidePasswordChange={handleHidePasswordChange}
            />
            <TextInput
              style={styles.input}
              onChangeText={setInput}
              value={password}
              placeholder={label}
              secureTextEntry={hidePassword}
              onEndEditing={setInputError}
            />
          </View>
        </Shadow>
      </View>
      {!!inputError && (
        <Header color="red" align="right" variant="h6" fontWeight="regular">
          {inputError}
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
