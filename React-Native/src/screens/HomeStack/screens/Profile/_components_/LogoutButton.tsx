import React from 'react';
import {TouchableOpacity, Image, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {styles} from '../Profile.style';

import {useAuthContext} from '../../../../_hooks_/useAuthContext';

import type {MainStackScreenProps} from '../../../../MainStack.types';

import {localStorage} from '../../../../../utils/helpers/LocalStorage';
import {showToast} from '../../../../../utils/helpers/showToast';
import {ICONS} from '../../../../../utils/constants/Icons';

import {Header} from '../../../../../components/Header/Header';

const LogoutButton: React.FC = () => {
  const {setIsRestaurantOwner} = useAuthContext();
  const navigation = useNavigation<MainStackScreenProps<'StartupStack'>['navigation']>();

  const logout = async () => {
    await localStorage.remove('token');

    setIsRestaurantOwner(false);
    showToast('تم تسجيل الخروج بنجاح');
    navigation.replace('StartupStack', {screen: 'Welcom'});
  };

  return (
    <View style={styles.logoutButtonContainer}>
      <TouchableOpacity style={styles.logoutButton} onPress={logout} activeOpacity={0.7}>
        <View style={styles.logoutIconContainer}>
          <Image style={styles.logoutIcon} source={ICONS.logout} resizeMode="contain" />
        </View>

        <Header fontWeight="semibold">تسجيل الخروج</Header>
      </TouchableOpacity>
    </View>
  );
};

export {LogoutButton};
