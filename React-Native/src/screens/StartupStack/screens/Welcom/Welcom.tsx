import React, {useLayoutEffect} from 'react';
import {View} from 'react-native';

import {styles} from './Welcom.style';

import type {StartupStackScreenProps} from '../../StartupStack.types';

import {localStorage} from '../../../../utils/helpers/LocalStorage';

import {Layout} from '../../_components_/Layout/Layout';
import {Logo} from '../../../../components/Logo/Logo';
import {Header} from '../../../../components/Header/Header';
import {Button} from '../../../../components/Button/Button';

interface Props extends StartupStackScreenProps<'Welcom'> {}

const Welcom: React.FC<Props> = ({navigation}) => {
  return (
    <>
      <Layout>
        <View style={styles.container}>
          <Logo />

          <View style={styles.desc}>
            <Header variant="h4" style={styles.descText}>
              أنت تواجه صعوبة في إيجاد مطاعم الرحمة خلال شهر رمضان المبارك.
            </Header>
            <Header variant="h3" style={styles.descText}>
              تطبيق إفطار سيسهل عليك ذلك
            </Header>
          </View>
        </View>
      </Layout>

      <View style={styles.buttonContainer}>
        <Button onPress={() => navigation.replace('ChooseUsageType')}>إبدأ الآن !</Button>
      </View>
    </>
  );
};

export {Welcom};
