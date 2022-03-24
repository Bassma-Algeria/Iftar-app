import {View} from 'react-native';
import React, {useState} from 'react';

import {styles} from './Search.style';

import {SearchBar} from './_components_/SearchBar';
import {SearchResult} from './_components_/SearchResult';

const Search: React.FC = () => {
  const [searchValue, setSearchValue] = useState<string>('');

  return (
    <View style={styles.container}>
      <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />
      <SearchResult searchValue={searchValue} />
    </View>
  );
};

export {Search};
