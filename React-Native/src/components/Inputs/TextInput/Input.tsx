import React from 'react';
import {
  TextInput,
  View,
  KeyboardTypeOptions,
  Image,
  ImageSourcePropType,
} from 'react-native';

import {Shadow} from 'react-native-shadow-2';

import {styles} from '../Input.style';

interface Props {
  label: string;
  keyboardType?: KeyboardTypeOptions | undefined;
  icon: ImageSourcePropType;
}

const Input: React.FC<Props> = ({label, icon, keyboardType}) => {
  const [input, onInputChange] = React.useState<string>('');
  return (
    <View style={styles.inputHolder}>
      <Shadow distance={6} startColor={'#00000010'}>
        <View style={styles.inputContainer}>
          <Image source={icon} resizeMode="contain" />
          <TextInput
            style={styles.input}
            onChangeText={onInputChange}
            value={input}
            placeholder={label}
            keyboardType={keyboardType}
          />
        </View>
      </Shadow>
    </View>
  );
};

export {Input};
