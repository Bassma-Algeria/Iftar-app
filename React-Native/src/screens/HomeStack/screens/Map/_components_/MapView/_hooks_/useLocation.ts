import {useEffect, useState} from 'react';
import {Platform} from 'react-native';
import {request, PERMISSIONS, RESULTS} from 'react-native-permissions';
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
  const granted = await request(
    Platform.select({
      android: PERMISSIONS.ANDROID.ACCESS_COARSE_LOCATION,
      ios: PERMISSIONS.IOS.LOCATION_WHEN_IN_USE,
    }),
    {
      title: 'Iftar',
      message: 'Iftar would like access to your location ',
    },
  );

  return granted === RESULTS.GRANTED;
};

export {useLocation};
