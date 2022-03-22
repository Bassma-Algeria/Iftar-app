import React, {useEffect} from 'react';
import {View, Animated, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {styles} from './Popup.style';

import {usePopupAnimation} from './_hooks_/usePopupAnimation';

interface Props {
  isOpen: boolean;
  onClose?: Function;
}

const Popup: React.FC<Props> = ({isOpen, children, onClose}) => {
  const navigation = useNavigation();
  const {translateY, closePopup, openPopup} = usePopupAnimation(onClose);

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

  return (
    <>
      {isOpen && <Overlay onPress={closePopup} />}

      <Animated.ScrollView style={[styles.container, {transform: [{translateY}]}]}>
        <View style={styles.topBar} />

        {children}
      </Animated.ScrollView>
    </>
  );
};

interface OverlayProp {
  onPress: () => void;
}

const Overlay: React.FC<OverlayProp> = ({onPress}) => {
  return <Pressable style={styles.overlay} onPress={onPress} />;
};

export {Popup};
