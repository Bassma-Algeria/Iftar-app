import React from 'react';
import {TextInput, View, Pressable, Image} from 'react-native';

import {styles} from '../Input.style';

import {Shadow} from 'react-native-shadow-2';

import {ICONS} from '../../../utils/constants/Icons';

interface Props {
  label: string;
}

const PasswordInput: React.FC<Props> = ({label}) => {
  const [input, onInputChange] = React.useState<string>('');
  const [hidePassword, setHidePassword] = React.useState<boolean>(true);
  const handleHidePasswordChange = () => {
    setHidePassword(!hidePassword);
  };
  return (
    <View style={styles.inputHolder}>
      <Shadow distance={6} startColor={'#00000010'}>
        <View style={styles.inputContainer}>
          <Pressable onPress={handleHidePasswordChange}>
            {hidePassword ? (
              <Image source={ICONS.closedEye} resizeMode="contain" />
            ) : (
              <Image source={ICONS.openEye} resizeMode="contain" />
            )}
          </Pressable>
          <TextInput
            style={styles.input}
            onChangeText={onInputChange}
            value={input}
            placeholder={label}
            secureTextEntry={hidePassword}
          />
        </View>
      </Shadow>
    </View>
  );
};

export {PasswordInput};
