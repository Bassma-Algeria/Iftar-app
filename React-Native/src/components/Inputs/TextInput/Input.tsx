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
  label: string;
  icon: ImageSourcePropType;
  keyboardType?: KeyboardTypeOptions;
  setText: (e: string) => void;
  text: string;
  pattern?: RegExp;
  type?: string;
  style?: StyleProp<ViewStyle>;
}

const Input: React.FC<Props> = ({
  label,
  icon,
  keyboardType,
  setText,
  text,
  pattern,
  type,
  style,
}) => {
  const [inputError, setinputError] = useState<string>('');
  const setInput = (t: string) => {
    if (!t) {
      setinputError(`${type} cannot be empty`);
    } else {
      setinputError('');
    }
    setText(t);
  };
  const setPatternError = (e: NativeSyntheticEvent<TextInputSubmitEditingEventData>) => {
    if (e.nativeEvent.text) {
      if (!pattern?.test(e.nativeEvent.text)) {
        setinputError(`This field needs to be an ${type?.toLocaleLowerCase()}`);
      } else {
        setinputError('');
      }
    }
  };
  return (
    <>
      <View style={[styles.inputHolder, style]}>
        <Shadow distance={6} startColor={'#00000010'}>
          <View style={styles.inputContainer}>
            <Image source={icon} resizeMode="contain" />
            <TextInput
              style={styles.input}
              onChangeText={setInput}
              placeholder={label}
              keyboardType={keyboardType}
              value={text}
              onEndEditing={setPatternError}
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

export {Input};
