import React, {useEffect} from 'react';
import {Animated, Pressable, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {styles} from '../../Map.style';

import {useMapContext} from '../../_hooks_/useMapContext';
import {usePopupAnimation} from './_hooks_/usePopupAnimation';

import {RestaurantPopupBody} from './_components_/RestaurantPopupBody/RestaurantPopupBody';

const RestaurantPopup: React.FC = () => {
  const navigation = useNavigation();
  const {selectedRestaurantId, setSelectedRestaurantId} = useMapContext();

  useEffect(() => {
    if (!selectedRestaurantId) {
      return;
    }

    const unsubscribe = navigation.addListener('beforeRemove', e => {
      e.preventDefault();
      setSelectedRestaurantId(undefined);
    });

    return unsubscribe;
  }, [navigation, selectedRestaurantId, setSelectedRestaurantId]);

  return (
    <>
      <Overlay />
      <AnimatedPopup />
    </>
  );
};

const Overlay: React.FC = () => {
  const {selectedRestaurantId, setSelectedRestaurantId} = useMapContext();

  return selectedRestaurantId ? (
    <Pressable
      style={styles.popupOverlay}
      onPress={() => setSelectedRestaurantId(undefined)}
    />
  ) : null;
};

const AnimatedPopup: React.FC = () => {
  const {selectedRestaurantId} = useMapContext();
  const {translateY} = usePopupAnimation(selectedRestaurantId);

  return (
    <Animated.View
      style={[styles.restaurantPopupContainer, {transform: [{translateY}]}]}>
      <View style={styles.popupTopBar} />

      <RestaurantPopupBody />
    </Animated.View>
  );
};

export {RestaurantPopup};
