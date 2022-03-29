import React from 'react';
import {Image, Pressable, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {styles} from '../Search.style';

import {ICONS} from '../../../../../utils/constants/Icons';

import {Input} from '../../../../../components/Inputs/TextInput/Input';

interface Props {
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
}

const SearchBar: React.FC<Props> = ({searchValue, setSearchValue}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.searchBar}>
      <Input
        placeholder={'ابحث عن مطعم...'}
        value={searchValue}
        onTextChange={setSearchValue}
        style={styles.input}
        radius={30}
        focused
      />
      <Pressable style={styles.backIconContainer} onPress={() => navigation.goBack()}>
        <Image source={ICONS.rightArrow} style={styles.backIcon} resizeMode="contain" />
      </Pressable>
    </View>
  );
};
export {SearchBar};
