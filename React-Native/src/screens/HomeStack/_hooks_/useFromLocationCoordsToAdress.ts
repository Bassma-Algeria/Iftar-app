import {useEffect, useState} from 'react';

import type {LocationCords} from '../../../@types/LocationCords';
import {geoCodingGateway} from '../../../Gateways';
import {showToast} from '../../../utils/helpers/showToast';

const useFromLocationCoordsToAdress = (locationCoords?: LocationCords) => {
  const [adress, setAdress] = useState<string>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    if (!locationCoords) {
      return;
    }

    setIsLoading(true);
    geoCodingGateway
      .getAdressNameOf(locationCoords)
      .then(setAdress)
      .catch(() => showToast('يرجى التحقق من اتصالك بالإنترنت'))
      .finally(() => setIsLoading(false));
  }, [locationCoords]);

  return {adress, isLoading};
};

export {useFromLocationCoordsToAdress};
