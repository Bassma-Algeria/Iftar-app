import React, {useEffect} from 'react';
import {Linking, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {styles} from '../DirectionMode.style';

import {ICONS} from '../../../../../../../utils/constants/Icons';

import {useMapContext} from '../../../_hooks_/useMapContext';
import {useDirectionModeContext} from '../../../_hooks_/useDirectionModeContext';

import {Header} from '../../../../../../../components/Header/Header';
import {Button} from '../../../../../../../components/Button/Button';

const DirectionInfo: React.FC = () => {
  const navigation = useNavigation();
  const {setUsageMode} = useMapContext();
  const {distance, setDestinationLocation, setDistance} = useDirectionModeContext();

  useEffect(() => {
    const unsubscribe = navigation.addListener('beforeRemove', e => {
      e.preventDefault();
      setUsageMode('discover');
      setDestinationLocation(undefined);
      setDistance(undefined);
    });

    return unsubscribe;
  }, [navigation, setDestinationLocation, setDistance, setUsageMode]);

  return (
    <View style={styles.directionInfoContainer}>
      <View style={styles.handleBar} />

      {!distance ? <LoadingMessage /> : <DirectionInfoBody distance={distance} />}
    </View>
  );
};

const LoadingMessage = () => {
  return (
    <View style={styles.loader}>
      <Header align="center" variant="h5" fontWeight="semibold">
        جاري البحث أفضل طريق ، يرجى الانتظار ...
      </Header>
    </View>
  );
};

const DirectionInfoBody: React.FC<{distance: number}> = ({distance}) => {
  const {setDestinationLocation, destinationLocation, setDistance} = useDirectionModeContext();
  const {setUsageMode} = useMapContext();

  const handleCancleClick = () => {
    setUsageMode('discover');
    setDestinationLocation(undefined);
    setDistance(undefined);
  };

  const handleGoogleMapClick = () => {
    const {latitude, longitude} = destinationLocation!;
    Linking.openURL(`https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`);
  };

  return (
    <View style={styles.directionInfoBody}>
      <Header align="center">
        <Header variant="h4" fontWeight="semibold" align="center">
          المسافة المتبقية :
        </Header>
        <Header variant="h4" fontWeight="bold">
          {` ${distance}m`}
        </Header>
      </Header>

      <View style={styles.directionInfoButtonsContainer}>
        <Button onPress={handleCancleClick} style={styles.infoButton} icon={ICONS.close}>
          إنهاء البحث
        </Button>
        <Button onPress={handleGoogleMapClick} style={styles.infoButton} icon={ICONS.locationWhite}>
          Google map
        </Button>
      </View>
    </View>
  );
};

export {DirectionInfo};
