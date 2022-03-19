import React from 'react';
import {TextInput, View, TouchableOpacity} from 'react-native';
import {styles} from './PasswordInput.style';
import {OpenEye, ClosedEye} from '../../Icons/Icons';
interface Props {}

const PasswordInput: React.FC<Props> = ({label}) => {
  const [input, onInputChange] = React.useState<string>('');
  const [hidePassword, setHidePassword] = React.useState<boolean>(true);
  const handleHidePasswordChange = () => {
    setHidePassword(!hidePassword);
  };
  return (
    <>
      <View style={styles.inputContainer}>
        <TouchableOpacity onPress={handleHidePasswordChange}>
          {hidePassword ? <ClosedEye /> : <OpenEye />}
        </TouchableOpacity>
        <TextInput
          style={styles.input}
          onChangeText={onInputChange}
          value={input}
          placeholder={label}
          secureTextEntry={hidePassword}
        />
      </View>
    </>
  );
};

export {PasswordInput};
