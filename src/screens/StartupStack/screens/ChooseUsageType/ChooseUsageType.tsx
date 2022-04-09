import React from 'react';
import {View} from 'react-native';

import {styles} from './ChooseUsageType.style';

import type {MainStackScreenProps} from '../../../MainStack.types';

import {Layout} from '../../_components_/Layout/Layout';
import {Logo} from '../../../../components/Logo/Logo';
import {Button} from '../../../../components/Button/Button';
import {useAuthContext} from '../../../_hooks_/useAuthContext';

interface Props extends MainStackScreenProps<'StartupStack'> {}

const ChooseUsageType: React.FC<Props> = ({navigation}) => {
  const {isRestaurantOwner} = useAuthContext();

  const handleAddRestaurantPress = () => {
    if (isRestaurantOwner) {
      navigation.navigate('HomeStack', {screen: 'Map'});
    } else {
      navigation.navigate('StartupStack', {screen: 'Login'});
    }
  };

  return (
    <>
      <Layout>
        <View style={styles.container}>
          <Logo />
        </View>
      </Layout>

      <View style={styles.buttonsContainer}>
        <Button onPress={() => navigation.navigate('HomeStack', {screen: 'Map'})}>
          إبحث عن مطعم
        </Button>

        <View style={styles.buttonsSeparator} />

        <Button onPress={handleAddRestaurantPress}>أضف مطعم</Button>
      </View>
    </>
  );
};

export {ChooseUsageType};
