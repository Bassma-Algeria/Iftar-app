import React from 'react';
import {View, StatusBar, ScrollView, TouchableOpacity, Image} from 'react-native';

import {MainStackScreenProps} from '../../../MainStack.types';

import {styles} from './Profile.style';

import {COLORS} from '../../../../theme/Colors';

import {ProfileContextProvider} from './_context_/ProfileContextProvider';
import {AuthContextProvider} from '../../../_context_/AuthContextProvider';
import {useAuthContext} from '../../../_hooks_/useAuthContext';
import {useNavigation} from '@react-navigation/native';

import {TopHead} from './_components_/TopHead';
import {RestaurantsList} from './_components_/RestaurantsList';
import {EditRestaurantFormPopup} from './_components_/EditRestaurantForm/EditRestaurantForm';

import {localStorage} from '../../../../utils/helpers/LocalStorage';
import {showToast} from '../../../../utils/helpers/showToast';
import {ICONS} from '../../../../utils/constants/Icons';

interface Props {}

const Profile: React.FC<Props> = () => {
  return (
    <ProfileContextProvider>
      <ScrollView style={styles.container}>
        <StatusBar backgroundColor={COLORS.beige} barStyle="dark-content" />
        <TopHead />

        <View style={styles.content}>
          <RestaurantsList />
        </View>
        <LogoutButton />
      </ScrollView>

      <EditRestaurantFormPopup />
    </ProfileContextProvider>
  );
};

const LogoutButton: React.FC = () => {
  const navigation = useNavigation<MainStackScreenProps<'StartupStack'>['navigation']>();
  const {setIsRestaurantOwner} = useAuthContext();
  const logout = () => {
    localStorage.remove('token');
    showToast('تم تسجيل الخروج بنجاح');
    setIsRestaurantOwner(false);
    navigation.replace('StartupStack', {screen: 'Welcom'});
  };
  return (
    <AuthContextProvider>
      <TouchableOpacity onPress={logout}>
        <Image style={styles.logoutIcon} source={ICONS.logout} resizeMode="contain" />
      </TouchableOpacity>
    </AuthContextProvider>
  );
};
export {Profile};
