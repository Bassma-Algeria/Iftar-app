import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {MainStack} from './screens/MainStack';
import SplashScreen from 'react-native-splash-screen';

interface Props {}

const AppContainer: React.FC<Props> = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
};

export {AppContainer};
