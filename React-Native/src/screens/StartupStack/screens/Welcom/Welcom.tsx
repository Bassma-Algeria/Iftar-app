import {View, Text} from 'react-native';
import React from 'react';

import {styles} from './Welcom.style';

import {Layout} from '../../_components_/Layout/Layout';

interface Props {}

const Welcom: React.FC<Props> = () => {
  return (
    <Layout>
      <Text>Welcom</Text>
    </Layout>
  );
};

export {Welcom};
