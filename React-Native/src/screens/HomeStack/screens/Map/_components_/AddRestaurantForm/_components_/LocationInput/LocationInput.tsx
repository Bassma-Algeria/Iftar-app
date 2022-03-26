import React, {useEffect} from 'react';
import {Image, Pressable, View} from 'react-native';

import {styles} from '../../AddRestaurantForm.style';

import {ICONS} from '../../../../../../../../utils/constants/Icons';

import {useFromLocationCoordsToAdress} from './_hooks_/useFromLocationCoordsToAdress';
import {useAddRestaurantFormContext} from '../../_hooks_/useAddRestaurantFormContext';
import {useChooseLocationModeContext} from '../../../../_hooks_/useChooseLocationModeContext';
import {useMapContext} from '../../../../_hooks_/useMapContext';

import type {LocationCords} from '../../../../../../../../@types/LocationCords';

import {Input} from './_components_/Input';
import {Loader} from '../../../../../../../../components/Loader/Loader';

const LocationInput = () => {
  const {restaurantInfo, setRestaurantInfo} = useAddRestaurantFormContext();
  const {setUsageMode, setIsAddRestaurantFormOpen} = useMapContext();
  const {setOnConfirm} = useChooseLocationModeContext();

  const {adress, isLoading} = useFromLocationCoordsToAdress(restaurantInfo.locationCoords);

  const handlePress = () => {
    setUsageMode('chooseLocation');
    setIsAddRestaurantFormOpen(false);
    setOnConfirm(() => (coordinates: LocationCords) => {
      setRestaurantInfo({...restaurantInfo, locationCoords: coordinates});
      setIsAddRestaurantFormOpen(true);
    });
  };

  useEffect(() => {
    if (adress) {
      setRestaurantInfo(info => ({...info, locationName: adress}));
    }
  }, [setRestaurantInfo, adress]);

  return (
    <Pressable onPress={handlePress}>
      <Input placeholder="الموقع" style={styles.input} value={restaurantInfo.locationName} disable>
        {isLoading ? <Loader size={20} color="primary" /> : <LocationIcon />}
      </Input>
    </Pressable>
  );
};

const LocationIcon: React.FC = () => {
  return (
    <View style={styles.locationIconContainer}>
      <Image source={ICONS.locationFilled} style={styles.locationIcon} resizeMode="contain" />
    </View>
  );
};

export {LocationInput};
