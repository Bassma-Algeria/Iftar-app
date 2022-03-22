import React, {useEffect} from 'react';
import {View, Animated, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {styles} from './Popup.style';

import {usePopupAnimation} from './_hooks_/usePopupAnimation';

interface Props {
  isOpen: boolean;
  onOpen?: Function;
  onClose?: Function;
}

const Popup: React.FC<Props> = ({isOpen, children, onOpen, onClose}) => {
  const navigation = useNavigation();
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

  return (
    <>
      {isPopupOpened && <Overlay closePopup={closePopup} />}

      <Animated.ScrollView style={[styles.container, {transform: [{translateY}]}]}>
        <View style={styles.topBar} />

        {children}
      </Animated.ScrollView>
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
