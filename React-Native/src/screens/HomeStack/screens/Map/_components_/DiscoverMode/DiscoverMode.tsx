import React from 'react';

import {useMapContext} from '../../_hooks_/useMapContext';

import {AddRestaurantButton} from './_components_/AddRestaurantButton/AddRestaurantButton';
import {MyLocationButton} from './_components_/MyLocationButton/MyLocationButton';
import {RestaurantPopup} from './_components_/RestaurantPopup/RestaurantPopup';
import {TopBar} from './_components_/TopBar/TopBar';

const DiscoverMode: React.FC = () => {
  const {usageMode} = useMapContext();

  return usageMode === 'discover' ? (
    <>
      <TopBar />
      <AddRestaurantButton />
      <RestaurantPopup />
      <MyLocationButton />
    </>
  ) : null;
};

export {DiscoverMode};