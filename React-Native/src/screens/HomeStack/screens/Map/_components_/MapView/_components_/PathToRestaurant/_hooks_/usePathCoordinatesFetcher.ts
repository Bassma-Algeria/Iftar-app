import {useState, useEffect} from 'react';

import type {LocationCords} from '../../../../../../../../../@types/LocationCords';
import {directionGateway} from '../../../../../../../../../Gateways';

import {showToast} from '../../../../../../../../../utils/helpers/showToast';

const usePathCoordinatesFetcher = (
  startLocation?: LocationCords,
  destinationLocation?: LocationCords,
) => {
  const [coordinates, setCoordinates] = useState<LocationCords[]>();

  useEffect(() => {
    if (!destinationLocation || !startLocation) {
      return;
    }

    setCoordinates(undefined);
    showToast('جاري البحث أفضل طريق ، يرجى الانتظار ...');

    directionGateway
      .getDirectionCoords(startLocation, destinationLocation)
      .then(setCoordinates)
      .catch(() => showToast('يرجى التحقق من اتصالك بالإنترنت'));
  }, [destinationLocation, startLocation]);

  return {coordinates};
};

export {usePathCoordinatesFetcher};
