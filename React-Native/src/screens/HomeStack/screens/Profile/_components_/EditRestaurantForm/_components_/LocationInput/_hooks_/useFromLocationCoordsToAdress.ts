import {useEffect, useState} from 'react';

import type {LocationCords} from '../../../../../../../../../@types/LocationCords';
import {showToast} from '../../../../../../../../../utils/helpers/showToast';

const useFromLocationCoordsToAdress = (locationCoords?: LocationCords) => {
  const [adress, setAdress] = useState<string>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    if (!locationCoords) {
      return;
    }

    setIsLoading(true);
    fetchAdressOf(locationCoords)
      .then(setAdress)
      .catch(() => showToast('يرجى التحقق من اتصالك بالإنترنت'))
      .finally(() => setIsLoading(false));
  }, [locationCoords]);

  return {adress, isLoading};
};

const fetchAdressOf = async (coords: LocationCords): Promise<string> => {
  try {
    return new Promise(resolve => setTimeout(() => resolve('الحراش وسط'), 900));
    // const response = await fetch(getAdressFetchingUrl(coords));
    // const {results} = await response.json();

    // return results[0].formatted_address;
  } catch (error: any) {
    throw new Error(`Fetching Adress Error: ${error}`);
  }
};

const getAdressFetchingUrl = ({latitude, longitude}: LocationCords) => {
  const KEY = 'AIzaSyDMUiPh6nBOeX30N3U3W1f0GjpX_idS6D8';
  const latlng = `${latitude},${longitude}`;

  return `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latlng}&sensor=true&language=ar&result_type=administrative_area_level_1|administrative_area_level_2&key=${KEY}`;
};

export {useFromLocationCoordsToAdress};
