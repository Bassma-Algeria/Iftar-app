import {
  View,
  ImageSourcePropType,
  Pressable,
  ScrollView,
  Animated,
  Image,
  LayoutAnimation,
  Platform,
  UIManager,
} from 'react-native';
import React, {useState} from 'react';

import {styles} from '../../Profile.style';

import {ICONS} from '../../../../../../utils/constants/Icons';

import {useArrowAnimation} from './_hooks_/useArrowAnimation';

import {Header} from '../../../../../../components/Header/Header';

if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

interface Props {
  title: string;
  icon: ImageSourcePropType;
  Details: React.FC<{isExpanded: boolean}>;
}

const ProfileItem: React.FC<Props> = ({title, icon, Details}) => {
  const [isDetailsOpen, setIsDetailsOpen] = useState<boolean>(false);
  const {rotate} = useArrowAnimation(isDetailsOpen);

  const maxHeight = !isDetailsOpen ? 0 : '100%';

  const handlePress = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setIsDetailsOpen(!isDetailsOpen);
  };

  return (
    <ScrollView style={styles.item}>
      <Pressable style={styles.itemTitle} onPress={handlePress}>
        <Animated.View style={[styles.arrowIconContainer, {transform: [{rotate}]}]}>
          <Image source={ICONS.arrowDown} style={styles.arrowIcon} resizeMode="contain" />
        </Animated.View>

        <View style={styles.title}>
          <Header fontWeight="bold">{title}</Header>

          <View style={styles.titleIconContainer}>
            <Image source={icon} style={styles.titleIcon} resizeMode="contain" />
          </View>
        </View>
      </Pressable>

      <View style={{maxHeight}}>
        <Details isExpanded={isDetailsOpen} />
      </View>
    </ScrollView>
  );
};

export {ProfileItem};
