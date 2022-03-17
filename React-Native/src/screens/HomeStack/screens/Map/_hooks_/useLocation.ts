import {useEffect, useState} from 'react';
import {PermissionsAndroid} from 'react-native';
import Geolocation from 'react-native-geolocation-service';

interface Location {
  latitude: number;
  longitude: number;
}

const useLocation = () => {
  const [currentLocation, setCurrentLocation] = useState<Location>();
  const [error, setError] = useState<string>();

  useEffect(() => {
    askForLocationPermission().then(granted => {
      if (!granted) {
        return setError('Location permission denied');
      }

      Geolocation.getCurrentPosition(
        position => setCurrentLocation(position.coords),
        err => setError(err.message),
        {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
      );
    });
  }, []);

  return {currentLocation, error};
};

const askForLocationPermission = async (): Promise<boolean> => {
  const {ACCESS_FINE_LOCATION} = PermissionsAndroid.PERMISSIONS;

  return PermissionsAndroid.request(ACCESS_FINE_LOCATION)
    .then(result => {
      return result === PermissionsAndroid.RESULTS.GRANTED;
    })
    .catch(() => false);
};

export {useLocation};
