import React from 'react';
import {View, StatusBar, ScrollView} from 'react-native';

import {styles} from './Profile.style';

import {COLORS} from '../../../../theme/Colors';

import {TopHead} from './_components_/TopHead';
import {RestaurantsList} from './_components_/RestaurantsList';
import {Settings} from './_components_/Settings';
import {Seperator} from './_components_/Seperator';

interface Props {}

const Profile: React.FC<Props> = () => {
  return (
    <ScrollView style={styles.container}>
      <StatusBar backgroundColor={COLORS.beige} barStyle="dark-content" />
      <TopHead />

      <View style={styles.content}>
        <Settings />
        <Seperator />
        <RestaurantsList />
      </View>
    </ScrollView>
  );
};

export {Profile};
