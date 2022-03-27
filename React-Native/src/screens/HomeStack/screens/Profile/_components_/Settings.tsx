import {
  View,
  Pressable,
  Animated,
  Image,
  ScrollView,
  Platform,
  UIManager,
  LayoutAnimation,
} from 'react-native';
import React, {useLayoutEffect, useState} from 'react';

import {styles} from '../Profile.style';

import {ICONS} from '../../../../../utils/constants/Icons';

import {Header} from '../../../../../components/Header/Header';
import {Input} from '../../../../../components/Inputs/TextInput/Input';
import {ProfileItem} from './shared/ProfileItem';

const Settings = () => {
  return <ProfileItem title="إعدادات" icon={ICONS.settings} Details={Details} />;
};

const Details: React.FC<{isExpanded: boolean}> = () => {
  return (
    <>
      <Input placeholder="اسم" icon={ICONS.edit} style={styles.itemDetailsInput} disable />
      <Input placeholder="اسم" icon={ICONS.edit} style={styles.itemDetailsInput} disable />
      <Input placeholder="اسم" icon={ICONS.edit} style={styles.itemDetailsInput} disable />
    </>
  );
};

export {Settings};
