import React, {useEffect} from 'react';
import {Animated, Pressable, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {styles} from '../../Map.style';

import {useMapContext} from '../../_hooks_/useMapContext';
import {usePopupAnimation} from './_hooks_/usePopupAnimation';

import {RestaurantPopupBody} from './_components_/RestaurantPopupBody/RestaurantPopupBody';

const RestaurantPopup: React.FC = () => {
  const navigation = useNavigation();
  const {selectedRestaurant, setSelectedRestaurant} = useMapContext();

  useEffect(() => {
    if (!selectedRestaurant) {
      return;
    }

    const unsubscribe = navigation.addListener('beforeRemove', e => {
      e.preventDefault();
      setSelectedRestaurant(undefined);
    });

    return unsubscribe;
  }, [navigation, selectedRestaurant, setSelectedRestaurant]);

  return (
    <>
      <Overlay />
      <AnimatedPopup />
    </>
  );
};

const Overlay: React.FC = () => {
  const {selectedRestaurant, setSelectedRestaurant} = useMapContext();

  return selectedRestaurant ? (
    <Pressable style={styles.popupOverlay} onPress={() => setSelectedRestaurant(undefined)} />
  ) : null;
};

const AnimatedPopup: React.FC = () => {
  const {selectedRestaurant} = useMapContext();
  const {translateY} = usePopupAnimation(selectedRestaurant);

  return (
    <Animated.View style={[styles.restaurantPopupContainer, {transform: [{translateY}]}]}>
      <View style={styles.popupTopBar} />
      <RestaurantPopupBody />
    </Animated.View>
  );
};

export {RestaurantPopup};
