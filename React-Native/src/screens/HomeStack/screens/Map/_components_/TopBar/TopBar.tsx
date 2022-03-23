import React, {useState} from 'react';
import {View} from 'react-native';

import {styles} from '../../Map.style';

import {ICONS} from '../../../../../../utils/constants/Icons';

import {Input} from '../../../../../../components/Inputs/TextInput/Input';
import {IconButton} from '../../../../../../components/IconButton/IconButton';

const TopBar: React.FC = () => {
  const [searchValue, setSearchValue] = useState<string>('');

  return (
    <View style={styles.topBarContainer}>
      <IconButton icon={ICONS.profile} style={styles.profileIcon} />

      <View style={styles.topBarInput}>
        <Input
          icon={ICONS.search}
          placeholder={'ابحث عن مطعم...'}
          value={searchValue}
          onTextChange={setSearchValue}
          iconPosition={'right'}
        />
      </View>
    </View>
  );
};

export {TopBar};
