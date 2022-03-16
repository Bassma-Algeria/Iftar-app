import React from 'react';
import {View} from 'react-native';

import {styles} from './Map.style';

import {HomeStackScreenProps} from '../../HomeStack.types';

import {Header} from '../../../../components/Header/Header';

interface Props extends HomeStackScreenProps<'Map'> {}

const Map: React.FC<Props> = ({navigation}) => {
  return (
    <View>
      <Header>Map</Header>
    </View>
  );
};

export {Map};
