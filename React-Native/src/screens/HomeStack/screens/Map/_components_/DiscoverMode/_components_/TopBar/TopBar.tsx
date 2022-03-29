import React from 'react';
import {Image, Pressable, View} from 'react-native';
import {Shadow} from 'react-native-shadow-2';
import {useNavigation} from '@react-navigation/native';

import {styles} from '../../DiscoverMode.style';

import type {HomeStackScreenProps} from '../../../../../../HomeStack.types';

import {ICONS} from '../../../../../../../../utils/constants/Icons';

import {IconButton} from '../../../../../../../../components/IconButton/IconButton';
import {Header} from '../../../../../../../../components/Header/Header';

const TopBar: React.FC = () => {
  const navigation = useNavigation<HomeStackScreenProps<'Search'>['navigation']>();

  return (
    <View style={styles.topBarContainer}>
      <Shadow
        distance={2}
        offset={[0, 1]}
        startColor={'#00000015'}
        viewStyle={styles.shadowContainer}
        containerViewStyle={styles.shadowContainer}>
        <View style={styles.searchBarContainer}>
          <IconButton
            icon={ICONS.profile}
            size={35}
            style={styles.profileButton}
            onPress={() => navigation.navigate('Profile')}
          />

          <Pressable style={styles.textIconContainer} onPress={() => navigation.navigate('Search')}>
            <Header color="grey">ابحث عن مطعم...</Header>

            <View style={styles.searchIconContainer}>
              <Image source={ICONS.search} style={styles.searchIcon} resizeMode="contain" />
            </View>
          </Pressable>
        </View>
      </Shadow>
    </View>
  );
};

export {TopBar};
