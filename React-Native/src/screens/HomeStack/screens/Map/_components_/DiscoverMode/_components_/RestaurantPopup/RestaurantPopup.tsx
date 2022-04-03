import React from 'react';

import {styles} from '../../DiscoverMode.style';

import {useDiscoverModeContext} from '../../../../_hooks_/useDiscoverModeContext';
import {useRestaurantInfoFetcher} from './_hooks_/useRestaurantInfoFetcher';

import {RestaurantInfoView} from './_components_/RestaurantPopupBody/RestaurantInfoView';
import {Popup} from '../../../../../../../../components/Popup/Popup';
import {Loader} from '../../../../../../../../components/Loader/Loader';
import {Header} from '../../../../../../../../components/Header/Header';

const RestaurantPopup: React.FC = () => {
  const {selectedRestaurant, setSelectedRestaurant} = useDiscoverModeContext();
  const {isLoading, restaurantInfo} = useRestaurantInfoFetcher(selectedRestaurant?.restaurantId);

  return (
    <Popup isOpen={!!selectedRestaurant} setIsOpen={() => setSelectedRestaurant(undefined)}>
      {isLoading ? (
        <Loading />
      ) : !restaurantInfo ? (
        <ErrorMessage />
      ) : (
        <RestaurantInfoView {...restaurantInfo} />
      )}
    </Popup>
  );
};

const Loading = () => {
  return <Loader style={styles.restaurantPopupPadding} color="brown" size={50} />;
};

const ErrorMessage = () => {
  return (
    <Header style={styles.restaurantPopupPadding} align="center" variant="h4" fontWeight="semibold">
      يرجى التحقق من اتصالك بالإنترنت
    </Header>
  );
};

export {RestaurantPopup};
