import {View, Text, StatusBar} from 'react-native';
import React from 'react';

import {styles} from './Profile.style';

import {TopHead} from './_components_/TopHead';
import {COLORS} from '../../../../theme/Colors';

interface Props {}

const Profile: React.FC<Props> = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={COLORS.beige} barStyle="dark-content" />
      <TopHead />

      <View style={styles.content}>
        <Text>Profile</Text>
      </View>
    </View>
  );
};

export {Profile};
