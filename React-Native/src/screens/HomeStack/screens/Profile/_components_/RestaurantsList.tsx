import React from 'react';
import {View, Animated, Image, Pressable} from 'react-native';

import {styles} from '../Profile.style';
import {ICONS} from '../../../../../utils/constants/Icons';
import {Header} from '../../../../../components/Header/Header';

const RestaurantsList: React.FC = () => {
  return (
    <View style={styles.item}>
      <Pressable style={styles.itemTitle}>
        <Animated.View style={[styles.arrowIconContainer]}>
          <Image source={ICONS.arrowDown} style={styles.arrowIcon} resizeMode="contain" />
        </Animated.View>

        <View style={styles.title}>
          <Header fontWeight="bold">قائمة المطاعم</Header>
          <View style={styles.titleIconContainer}>
            <Image source={ICONS.list} style={styles.titleIcon} resizeMode="contain" />
          </View>
        </View>
      </Pressable>
    </View>
  );
};

export {RestaurantsList};
