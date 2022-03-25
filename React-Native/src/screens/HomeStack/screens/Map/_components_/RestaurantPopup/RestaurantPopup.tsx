import React from 'react';

import {styles} from './RestaurantPopup.style';

import {useMapContext} from '../../_hooks_/useMapContext';

import {RestaurantInfoView} from './_components_/RestaurantPopupBody/RestaurantInfoView';
import {Popup} from '../../../../../../components/Popup/Popup';
import {Loader} from '../../../../../../components/Loader/Loader';

const RestaurantPopup: React.FC = () => {
  const {selectedRestaurant, setSelectedRestaurant} = useMapContext();

  return (
    <Popup isOpen={!!selectedRestaurant} onClose={() => setSelectedRestaurant(undefined)}>
      {!selectedRestaurant ? (
        <Loader style={styles.restaurantPopupLoader} color="brown" size={50} />
      ) : (
        <RestaurantInfoView {...selectedRestaurant} />
      )}
    </Popup>
  );
};

export {RestaurantPopup};
