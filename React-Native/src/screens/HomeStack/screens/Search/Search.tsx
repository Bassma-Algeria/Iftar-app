import {View, Image, Pressable} from 'react-native';
import React, {useState} from 'react';

import {styles} from './Search.style';

import type {HomeStackScreenProps} from '../../HomeStack.types';

import {Input} from '../../../../components/Inputs/TextInput/Input';
import {ICONS} from '../../../../utils/constants/Icons';

interface Props extends HomeStackScreenProps<'Search'> {}

const Search: React.FC<Props> = ({navigation}) => {
  const [searchValue, setSearchValue] = useState<string>('');

  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <Input
          placeholder={'ابحث عن مطعم...'}
          value={searchValue}
          onTextChange={setSearchValue}
          style={styles.input}
          radius={24}
          focused
        />
        <Pressable style={styles.backIconContainer} onPress={() => navigation.goBack()}>
          <Image source={ICONS.rightArrow} style={styles.backIcon} resizeMode="contain" />
        </Pressable>
      </View>
    </View>
  );
};

export {Search};
