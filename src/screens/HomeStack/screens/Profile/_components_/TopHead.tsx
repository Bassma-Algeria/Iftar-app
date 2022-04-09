import {View, Image} from 'react-native';
import React from 'react';

import {styles} from '../Profile.style';

import {ICONS} from '../../../../../utils/constants/Icons';

import {Header} from '../../../../../components/Header/Header';

const TopHead: React.FC = () => {
  return (
    <View style={styles.topHeadContainer}>
      <Header variant="h3" fontWeight="semibold">
        حساب المستخدم
      </Header>

      <View style={styles.profileIconContainer}>
        <Image source={ICONS.profileBrown} style={styles.profileIcon} resizeMode="contain" />
      </View>
    </View>
  );
};

export {TopHead};
