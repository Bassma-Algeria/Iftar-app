import React, {useCallback, useEffect} from 'react';
import {View} from 'react-native';

import {styles} from './Splash.style';

import {MainStackScreenProps} from '../../../MainStack.types';

import {useAuthContext} from '../../../_hooks_/useAuthContext';
import {localStorage} from '../../../../utils/helpers/LocalStorage';
import {Layout} from '../../_components_/Layout/Layout';
import {Logo} from '../../../../components/Logo/Logo';
import {Loader} from './_components_/Loader/Loader';

interface Props extends MainStackScreenProps<'StartupStack'> {}

const Splash: React.FC<Props> = ({navigation}) => {
  const {setIsRestaurantOwner} = useAuthContext();

  const setup = useCallback(async () => {
    const isFirstTime = await localStorage.get('firstTime');
    if (!isFirstTime) {
      return navigation.replace('StartupStack', {screen: 'Welcom'});
    }

    const token = await localStorage.get('token');
    navigation.replace('StartupStack', {screen: 'ChooseUsageType'});

    if (!token) {
      return;
    }

    setIsRestaurantOwner(true);
    navigation.navigate('HomeStack', {screen: 'Map'});
  }, [navigation, setIsRestaurantOwner]);

  useEffect(() => {
    setup();
  }, [setup]);

  return (
    <Layout>
      <View style={styles.container}>
        <Logo />
        <Loader />
      </View>
    </Layout>
  );
};

export {Splash};
