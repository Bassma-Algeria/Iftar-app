import React from 'react';
import {TextInput, View} from 'react-native';
import {styles} from './Input.style';
interface Props {}
const Input: React.FC<Props> = ({label, children, keyboardType}) => {
  const [input, onInputChange] = React.useState<string>('');
  return (
    <>
      <View style={styles.inputContainer}>
        {children}
        <TextInput
          style={styles.input}
          onChangeText={onInputChange}
          value={input}
          placeholder={label}
          keyboardType={keyboardType}
        />
      </View>
    </>
  );
};

export {Input};
