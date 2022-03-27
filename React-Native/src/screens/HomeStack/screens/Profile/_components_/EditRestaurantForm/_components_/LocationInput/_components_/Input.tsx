import React from 'react';
import {TextInput, StyleProp, ViewStyle} from 'react-native';

import {styles} from '../../../../../Profile.style';

import {COLORS} from '../../../../../../../../../theme/Colors';

import {BaseInput} from '../../../../../../../../../components/Inputs/BaseInput';

interface Props {
  placeholder: string;
  value: string;
  style?: StyleProp<ViewStyle>;
  error?: string;
  disable?: boolean;
}

const Input: React.FC<Props> = props => {
  return (
    <BaseInput {...props} backgroundColor="beige">
      {props.children}

      <TextInput
        style={styles.locationInput}
        value={props.value}
        placeholder={props.placeholder}
        placeholderTextColor={COLORS.greyShade}
        editable={!props.disable}
      />
    </BaseInput>
  );
};

export {Input};
