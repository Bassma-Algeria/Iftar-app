import React, {useEffect, useLayoutEffect} from 'react';
import {View, Animated, Pressable, ScrollView, StyleProp, ViewStyle} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {styles} from './Popup.style';

import {usePopupAnimation} from './_hooks_/usePopupAnimation';

import {COLORS} from '../../theme/Colors';

interface Props {
  isOpen: boolean;
  fullHight?: boolean;
  onOpen?: Function;
  onClose?: Function;
  backgroundColor?: keyof typeof COLORS;
  containerStyle?: StyleProp<ViewStyle>;
}

const Popup: React.FC<Props> = ({
  isOpen,
  children,
  onOpen,
  onClose,
  fullHight,
  containerStyle,
  backgroundColor,
}) => {
  const navigation = useNavigation();
  const height = fullHight ? '100%' : 'auto';
  const {translateY, closePopup, openPopup, isPopupOpened} = usePopupAnimation(onOpen, onClose);

  useEffect(() => {
    if (isOpen) {
      openPopup();
    } else {
      closePopup();
    }
  }, [closePopup, openPopup, isOpen]);

  useEffect(() => {
    const unsubscribe = navigation.addListener('beforeRemove', e => {
      if (!isOpen) {
        return;
      }

      e.preventDefault();
      closePopup();
    });

    return unsubscribe;
  }, [closePopup, navigation, isOpen]);

  let customStyle: StyleProp<ViewStyle> = {};

  if (backgroundColor) {
    customStyle.backgroundColor = COLORS[backgroundColor];
  }

  return (
    <>
      {isPopupOpened && <Overlay closePopup={closePopup} />}

      <Animated.View style={[styles.container, customStyle, {height, transform: [{translateY}]}]}>
        <View style={styles.topBar} />

        <ScrollView contentContainerStyle={containerStyle}>{children}</ScrollView>
      </Animated.View>
    </>
  );
};

interface OverlayProp {
  closePopup: () => void;
}

const Overlay: React.FC<OverlayProp> = ({closePopup}) => {
  return <Pressable style={styles.overlay} onPress={closePopup} />;
};

export {Popup};
