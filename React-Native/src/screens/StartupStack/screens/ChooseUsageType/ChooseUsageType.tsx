import React from 'react';
import {View} from 'react-native';

import {styles} from './ChooseUsageType.style';

import {Layout} from '../../_components_/Layout/Layout';
import {Logo} from '../../../../components/Logo/Logo';
import {Button} from '../../../../components/Button/Button';

import type {MainStackScreenProps} from '../../../MainStack.types';

interface Props extends MainStackScreenProps<'StartupStack'> {}

const ChooseUsageType: React.FC<Props> = ({navigation}) => {
  return (
    <>
      <Layout>
        <View style={styles.container}>
          <Logo />
        </View>
      </Layout>

      <View style={styles.buttonsContainer}>
        <Button
          label="إبحث عن مطعم"
          onPress={() => navigation.navigate('HomeStack', {screen: 'Map'})}
        />

        <View style={styles.buttonsSeparator} />

        <Button
          label="أضف مطعم"
          onPress={() => navigation.navigate('StartupStack', {screen: 'Login'})}
        />
      </View>
    </>
  );
};

export {ChooseUsageType};
