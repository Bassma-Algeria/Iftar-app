import React from 'react';

import {styles} from '../../Map.style';

import {useMapContext} from '../../_hooks_/useMapContext';
import {useFromLocationCoordsToAdress} from './_hooks_/useFromLocationCoordsToAdress';

import {RestaurantInfoView} from './_components_/RestaurantPopupBody/RestaurantInfoView';
import {Popup} from '../../../../../../components/Popup/Popup';
import {Loader} from '../../../../../../components/Loader/Loader';
import {Header} from '../../../../../../components/Header/Header';

const RestaurantPopup: React.FC = () => {
  const {selectedRestaurant, setSelectedRestaurant} = useMapContext();
  const {adress, error} = useFromLocationCoordsToAdress();

  return (
    <Popup isOpen={!!selectedRestaurant} onClose={() => setSelectedRestaurant(undefined)}>
      {!adress || !selectedRestaurant ? (
        <Loader style={styles.restaurantPopupLoader} color="brown" size={50} />
      ) : error ? (
        <Header align="center" variant="h5" fontWeight="bold" style={styles.restaurantPopupLoader}>
          يرجى التحقق من الاتصال بالإنترنت ، والمحاول مرة أخرى
        </Header>
      ) : (
        <RestaurantInfoView {...selectedRestaurant} adress={adress} />
      )}
    </Popup>
  );
};

export {RestaurantPopup};
