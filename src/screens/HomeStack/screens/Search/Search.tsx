import {StatusBar, View} from 'react-native';
import React, {useState} from 'react';

import {styles} from './Search.style';

import {COLORS} from '../../../../theme/Colors';

import {SearchBar} from './_components_/SearchBar';
import {SearchResult} from './_components_/SearchResult';

const Search: React.FC = () => {
  const [searchValue, setSearchValue] = useState<string>('');

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={COLORS.beigeShade} barStyle="dark-content" />

      <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />
      <SearchResult searchValue={searchValue} />
    </View>
  );
};

export {Search};
