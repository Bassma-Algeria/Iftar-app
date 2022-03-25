import React from 'react';
import {Pressable, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {styles} from '../../../../Map.style';

import type {HomeStackScreenProps} from '../../../../../../HomeStack.types';

import {ICONS} from '../../../../../../../../utils/constants/Icons';

import {Input} from '../../../../../../../../components/Inputs/TextInput/Input';
import {IconButton} from '../../../../../../../../components/IconButton/IconButton';

const TopBar: React.FC = () => {
  const navigation = useNavigation<HomeStackScreenProps<'Search'>['navigation']>();

  return (
    <View style={styles.topBarContainer}>
      <IconButton
        icon={ICONS.profile}
        style={styles.profileIcon}
        onPress={() => navigation.navigate('Profile')}
      />

      <Pressable style={styles.topBarInput} onPress={() => navigation.navigate('Search')}>
        <Input
          icon={ICONS.search}
          placeholder={'ابحث عن مطعم...'}
          value={''}
          onTextChange={() => {}}
          iconPosition={'right'}
          radius={22}
          disable
        />
      </Pressable>
    </View>
  );
};

export {TopBar};
