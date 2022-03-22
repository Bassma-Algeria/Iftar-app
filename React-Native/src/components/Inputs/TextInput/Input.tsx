import React, {useState} from 'react';
import {
  TextInput,
  View,
  KeyboardTypeOptions,
  Image,
  ImageSourcePropType,
  NativeSyntheticEvent,
  TextInputSubmitEditingEventData,
  StyleProp,
  ViewStyle,
} from 'react-native';

import {Shadow} from 'react-native-shadow-2';
import {Header} from '../../Header/Header';

import {styles} from '../Input.style';

interface Props {
  placeholder: string;
  icon: ImageSourcePropType;
  value: string;
  onTextChange: (text: string) => void;
  keyboardType?: KeyboardTypeOptions;
  iconPosition?: 'left' | 'right';
  style?: StyleProp<ViewStyle>;
  error?: string;
}

const Input: React.FC<Props> = props => {
  return (
    <>
      <Shadow distance={6} startColor={'#00000010'} containerViewStyle={props.style}>
        <View style={styles.inputContainer}>
          <Image source={props.icon} resizeMode="contain" />
          <TextInput
            style={styles.input}
            value={props.value}
            onChangeText={props.onTextChange}
            placeholder={props.placeholder}
            keyboardType={props.keyboardType}
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

export {Input};
