import {useEffect, useState} from 'react';

import type {LocationCords} from '../../../../../../../@types/LocationCords';

const useFromLocationCoordsToAdress = (locationCoords?: LocationCords) => {
  const [adress, setAdress] = useState<string>();
  const [error, setError] = useState<string>();

  useEffect(() => {
    if (!locationCoords) {
      return;
    }

    fetchAdressOf(locationCoords).then(setAdress).catch(setError);
  }, [locationCoords]);

  return {adress, error};
};

const fetchAdressOf = async (coords: LocationCords): Promise<string> => {
  try {
    const response = await fetch(getAdressFetchingUrl(coords));
    const {results} = await response.json();

    return results[0].formatted_address;
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
