import React from 'react';
import {View, Animated, Image, Pressable} from 'react-native';

import {styles} from '../Profile.style';

import {ICONS} from '../../../../../utils/constants/Icons';

import {ProfileItem} from './shared/ProfileItem';

const RestaurantsList: React.FC = () => {
  return <ProfileItem title="قائمة المطاعم" icon={ICONS.list} Details={() => <></>} />;
};

export {RestaurantsList};
