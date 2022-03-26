import {View, Image} from 'react-native';
import React from 'react';

import {styles} from '../Profile.style';

import {Header} from '../../../../../components/Header/Header';
import {ICONS} from '../../../../../utils/constants/Icons';

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
