import React from 'react';
import {View} from 'react-native';

import {styles} from './ChooseUsageType.style';

import {Layout} from '../../_components_/Layout/Layout';
import {Logo} from '../../../../components/Logo/Logo';
import {Button} from '../../../../components/Button/Button';

import type {MainStackScreenProps} from '../../../MainStack.types';
import {Header} from '../../../../components/Header/Header';

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
        <Button onPress={() => navigation.navigate('HomeStack', {screen: 'Map'})}>
          <Header color="whiteShade" variant="h4" fontWeight="semibold">
            إبحث عن مطعم
          </Header>
        </Button>

        <View style={styles.buttonsSeparator} />

        <Button onPress={() => navigation.navigate('StartupStack', {screen: 'Login'})}>
          <Header color="whiteShade" variant="h4" fontWeight="semibold">
            أضف مطعم
          </Header>
        </Button>
      </View>
    </>
  );
};

export {ChooseUsageType};
