import React from 'react';
import {TouchableOpacity, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {styles} from '../Profile.style';

import {useAuthContext} from '../../../../_hooks_/useAuthContext';

import type {MainStackScreenProps} from '../../../../MainStack.types';

import {localStorage} from '../../../../../utils/helpers/LocalStorage';
import {showToast} from '../../../../../utils/helpers/showToast';
import {ICONS} from '../../../../../utils/constants/Icons';

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
    <TouchableOpacity onPress={logout}>
      <Image style={styles.logoutIcon} source={ICONS.logout} resizeMode="contain" />
    </TouchableOpacity>
  );
};

export {LogoutButton};
