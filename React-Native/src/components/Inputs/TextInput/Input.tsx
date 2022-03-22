import React from 'react';
import {TextInput, View, KeyboardTypeOptions, Image, ImageSourcePropType} from 'react-native';

import {Shadow} from 'react-native-shadow-2';

import {styles} from '../Input.style';

interface Props {
  label: string;
  icon: ImageSourcePropType;
  keyboardType?: KeyboardTypeOptions;
  setText: (e: string) => void;

  text: string;
}

const Input: React.FC<Props> = ({label, icon, keyboardType, setText, text}) => {
  return (
    // <View style={styles.inputHolder}>
    <Shadow distance={6} startColor={'#00000010'}>
      <View style={styles.inputContainer}>
        <View style={styles.iconContainer}>
          <Image source={icon} style={styles.icon} resizeMode="contain" />
        </View>

        <TextInput
          style={styles.input}
          onChangeText={setText}
          placeholder={label}
          keyboardType={keyboardType}
          value={text}
        />
      </View>
    </Shadow>
    // </View>
  );
};

export {Input};
