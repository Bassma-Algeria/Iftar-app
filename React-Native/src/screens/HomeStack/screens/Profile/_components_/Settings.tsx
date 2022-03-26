import {View, Pressable, Animated, Image, ScrollView} from 'react-native';
import React, {useState} from 'react';

import {styles} from '../Profile.style';

import {ICONS} from '../../../../../utils/constants/Icons';

import {useArrowAnimation} from '../_hooks_/useArrowAnimation';
import {useDetailsAnimation} from '../_hooks_/useDetailsAnimation';

import {Header} from '../../../../../components/Header/Header';
import {Input} from '../../../../../components/Inputs/TextInput/Input';

const Settings = () => {
  const [isDetailsOpen, setIsDetailsOpen] = useState<boolean>(false);
  const {rotate} = useArrowAnimation(isDetailsOpen);
  const {maxHeight} = useDetailsAnimation(isDetailsOpen);

  return (
    <ScrollView style={styles.item}>
      <Pressable style={styles.itemTitle} onPress={() => setIsDetailsOpen(!isDetailsOpen)}>
        <Animated.View style={[styles.arrowIconContainer, {transform: [{rotate}]}]}>
          <Animated.Image source={ICONS.arrowDown} style={styles.arrowIcon} resizeMode="contain" />
        </Animated.View>

        <View style={styles.title}>
          <Header fontWeight="bold">إعدادات</Header>
          <View style={styles.titleIconContainer}>
            <Image source={ICONS.settings} style={styles.titleIcon} resizeMode="contain" />
          </View>
        </View>
      </Pressable>

      <Animated.View style={{maxHeight}}>
        <Input placeholder="اسم" icon={ICONS.edit} style={styles.itemDetailsInput} disable />
        <Input placeholder="اسم" icon={ICONS.edit} style={styles.itemDetailsInput} disable />
        <Input placeholder="اسم" icon={ICONS.edit} style={styles.itemDetailsInput} disable />
      </Animated.View>
    </ScrollView>
  );
};

export {Settings};
