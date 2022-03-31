import React, {useCallback, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, Animated, Pressable, StyleProp, ViewStyle} from 'react-native';

import {styles} from './Popup.style';

import {usePopupAnimation} from './_hooks_/usePopupAnimation';

import {COLORS} from '../../theme/Colors';

interface Props {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  fullHight?: boolean;
  onAutoClose?: Function;
  backgroundColor?: keyof typeof COLORS;
}

const Popup: React.FC<Props> = ({children, ...props}) => {
  const navigation = useNavigation();
  const {translateY, overlayOpacity} = usePopupAnimation(props.isOpen);

  let customStyle: StyleProp<ViewStyle> = {};
  customStyle.height = props.fullHight ? '100%' : 'auto';

  if (props.backgroundColor) {
    customStyle.backgroundColor = COLORS[props.backgroundColor];
  }

  const onClose = useCallback(() => {
    props.setIsOpen(false);
    props.onAutoClose?.();
  }, [props]);

  useEffect(() => {
    const unsubscribe = navigation.addListener('beforeRemove', e => {
      if (props.isOpen) {
        e.preventDefault();
        onClose();
      }
    });

    return unsubscribe;
  }, [navigation, onClose, props.isOpen]);

  return (
    <>
      <Overlay onPress={onClose} isOpen={props.isOpen} opacity={overlayOpacity} />

      <Animated.View style={[styles.container, customStyle, {transform: [{translateY}]}]}>
        <View style={styles.topBar} />

        {children}
      </Animated.View>
    </>
  );
};

interface OverlayProp {
  opacity: Animated.Value;
  isOpen: boolean;
  onPress: () => void;
}

const Overlay: React.FC<OverlayProp> = ({onPress, opacity, isOpen}) => {
  const zIndex = isOpen ? 2 : -1;

  return (
    <Animated.View style={[styles.overlay, {opacity, zIndex}]}>
      <Pressable style={{flex: 1}} onPress={onPress} />
    </Animated.View>
  );
};

export {Popup};
