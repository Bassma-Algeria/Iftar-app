import React from 'react';

import {styles} from './RestaurantPopup.style';

import {useDiscoverModeContext} from '../../../../_hooks_/useDiscoverModeContext';

import {RestaurantInfoView} from './_components_/RestaurantPopupBody/RestaurantInfoView';
import {Popup} from '../../../../../../../../components/Popup/Popup';
import {Loader} from '../../../../../../../../components/Loader/Loader';

const RestaurantPopup: React.FC = () => {
  const {selectedRestaurant, setSelectedRestaurant} = useDiscoverModeContext();

  return (
    <Popup isOpen={!!selectedRestaurant} setIsOpen={() => setSelectedRestaurant(undefined)}>
      {!selectedRestaurant ? (
        <Loader style={styles.restaurantPopupLoader} color="brown" size={50} />
      ) : (
        <RestaurantInfoView {...selectedRestaurant} />
      )}
    </Popup>
  );
};

export {RestaurantPopup};
