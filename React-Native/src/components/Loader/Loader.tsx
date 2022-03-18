import React from 'react';
import {ActivityIndicator, StyleProp, ViewStyle} from 'react-native';
import {COLORS} from '../../theme/Colors';

interface Props {
  size?: number;
  color?: keyof typeof COLORS;
  style?: StyleProp<ViewStyle>;
}

const Loader: React.FC<Props> = props => {
  return <ActivityIndicator {...props} />;
};

export {Loader};
