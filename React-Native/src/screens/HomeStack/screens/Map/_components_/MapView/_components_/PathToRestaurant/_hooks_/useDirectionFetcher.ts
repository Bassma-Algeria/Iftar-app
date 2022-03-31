import {useState, useEffect} from 'react';

import type {LocationCords} from '../../../../../../../../../@types/LocationCords';
import {directionGateway} from '../../../../../../../../../Gateways';

import {showToast} from '../../../../../../../../../utils/helpers/showToast';

type Result = {coordinates: LocationCords[]; distance: number};

const useDirectionFetcher = (
  startLocation?: LocationCords,
  destinationLocation?: LocationCords,
): Partial<Result> => {
  const [result, setResult] = useState<Result>();

  useEffect(() => {
    if (!destinationLocation || !startLocation) {
      return;
    }

    setResult(undefined);
    directionGateway
      .getDirection(startLocation, destinationLocation)
      .then(setResult)
      .catch(() => showToast('يرجى التحقق من اتصالك بالإنترنت'));
  }, [destinationLocation, startLocation]);

  return {coordinates: result?.coordinates, distance: result?.distance};
};

export {useDirectionFetcher};
