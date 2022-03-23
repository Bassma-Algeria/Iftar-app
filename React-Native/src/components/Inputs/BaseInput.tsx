import React from 'react';
import {Shadow} from 'react-native-shadow-2';
import {StyleProp, View, ViewStyle} from 'react-native';

import {styles} from './BaseInput.style';

import {Header} from '../Header/Header';

interface Props {
  iconPosition?: 'left' | 'right';
  style?: StyleProp<ViewStyle>;
  error?: string;
}

const BaseInput: React.FC<Props> = ({children, ...props}) => {
  let customStyle: StyleProp<ViewStyle> = {};

  if (props.iconPosition === 'right') {
    customStyle.flexDirection = 'row-reverse';
  }

  return (
    <>
      <Shadow distance={6} startColor={'#00000010'} containerViewStyle={props.style}>
        <View style={[styles.inputContainer, customStyle]}>{children}</View>
      </Shadow>

      <ErrorMessage error={props.error} />
    </>
  );
};

const ErrorMessage: React.FC<{error: string | undefined}> = ({error}) => {
  return error ? (
    <Header color="red" align="right" variant="h6" style={styles.errorText} fontWeight="regular">
      {error}
    </Header>
  ) : null;
};

export {BaseInput};
