import {View, Text} from 'react-native';
import React from 'react';

import {styles} from './Welcom.style';

import {Layout} from '../../_components_/Layout/Layout';
import {Logo} from '../../../../components/Logo/Logo';

interface Props {}

const Welcom: React.FC<Props> = () => {
  return (
    <Layout>
      <View style={styles.container}>
        <Logo />
      </View>
    </Layout>
  );
};

export {Welcom};
