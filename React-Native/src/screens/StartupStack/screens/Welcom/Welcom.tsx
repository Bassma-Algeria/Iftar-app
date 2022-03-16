import React from 'react';
import {View} from 'react-native';

import {styles} from './Welcom.style';

import {Layout} from '../../_components_/Layout/Layout';
import {Logo} from '../../../../components/Logo/Logo';
import {Header} from '../../../../components/Header/Header';
import {Button} from '../../../../components/Button/Button';

interface Props {}

const Welcom: React.FC<Props> = () => {
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
        <Button label="إبدأ الآن !" />
      </View>
    </>
  );
};

export {Welcom};
