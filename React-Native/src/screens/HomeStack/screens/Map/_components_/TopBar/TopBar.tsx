import React from 'react';
import {View} from 'react-native';

import {styles} from '../../Map.style';

import {ICONS} from '../../../../../../utils/constants/Icons';

import {Input} from '../../../../../../components/Inputs/TextInput/Input';

const TopBar: React.FC = () => {
  return (
    <View style={styles.topBarContainer}>
      <Input icon={ICONS.search} label={'ابحث عن مطعم...'} />
    </View>
  );
};

export {TopBar};
