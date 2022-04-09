import React from 'react';
import {Shadow} from 'react-native-shadow-2';
import {StyleProp, View, ViewStyle} from 'react-native';

import {styles} from './BaseInput.style';

import {COLORS} from '../../theme/Colors';

import {Header} from '../Header/Header';

interface Props {
  backgroundColor?: keyof typeof COLORS;
  style?: StyleProp<ViewStyle>;
  radius?: number;
  error?: string;
}

const BaseInput: React.FC<Props> = ({children, ...props}) => {
  let customStyle: StyleProp<ViewStyle> = {};

  if (props.backgroundColor) {
    customStyle.backgroundColor = COLORS[props.backgroundColor];
  }

  if (props.radius) {
    customStyle.borderRadius = props.radius;
  }

  return (
    <>
      <Shadow
        distance={2}
        offset={[0, 1]}
        startColor={'#00000015'}
        containerViewStyle={props.style}>
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
