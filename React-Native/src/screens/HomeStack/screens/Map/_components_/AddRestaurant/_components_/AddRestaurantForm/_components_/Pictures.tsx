import {View, Image, Pressable} from 'react-native';
import React from 'react';

import {styles} from '../../../AddRestaurant.style';

import {ICONS} from '../../../../../../../../../utils/constants/Icons';

import {Header} from '../../../../../../../../../components/Header/Header';

const Pictures: React.FC = () => {
  return (
    <View style={styles.picturesContainer}>
      <Pressable style={styles.addPicture}>
        <View style={styles.addPictureIconContainer}>
          <Image source={ICONS.addPicture} style={styles.addPictureIcon} resizeMode="contain" />
        </View>
        <Header fontWeight="semibold">أضف صورة</Header>
      </Pressable>
    </View>
  );
};

export {Pictures};
