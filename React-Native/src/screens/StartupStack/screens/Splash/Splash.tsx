import React, {useCallback, useEffect} from 'react';
import {Text, View} from 'react-native';

import {styles} from './Splash.style';

import {MainStackScreenProps} from '../../../MainStack.types';

import {useAuthContext} from '../../../_hooks_/useAuthContext';
import {localStorage} from '../../../../utils/helpers/LocalStorage';
import {Layout} from '../../_components_/Layout/Layout';
import {Logo} from '../../../../components/Logo/Logo';

interface Props extends MainStackScreenProps<'StartupStack'> {}

const Splash: React.FC<Props> = ({navigation}) => {
  const {setIsRestaurantOwner} = useAuthContext();

  const setup = useCallback(async () => {
    const isFirstTime = await localStorage.get('firstTime');
    if (!isFirstTime) {
      return navigation.replace('StartupStack', {screen: 'Welcom'});
    }

    const token = await localStorage.get('token');
    if (!token) {
      return navigation.replace('StartupStack', {screen: 'ChooseUsageType'});
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
      </View>
    </Layout>
  );
};

export {Splash};
