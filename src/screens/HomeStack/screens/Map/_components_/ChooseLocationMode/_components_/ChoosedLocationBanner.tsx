import {View} from 'react-native';
import React from 'react';

import {styles} from '../ChooseLocationMode.style';

import {useFromLocationCoordsToAdress} from '../_hooks_/useFromLocationCoordsToAdress';
import {useChoosingLocationState} from '../../../../../_hooks_/useChoosingLocationState';

import {ICONS} from '../../../../../../../utils/constants/Icons';

import {Header} from '../../../../../../../components/Header/Header';
import {Loader} from '../../../../../../../components/Loader/Loader';
import {Button} from '../../../../../../../components/Button/Button';
import {LocationCords} from '../../../../../../../@types/LocationCords';

const ChoosedLocationBanner: React.FC = () => {
  const state = useChoosingLocationState();
  const coordinates = state.value.selectedLocation;

  return (
    <View style={styles.bannerContainer}>
      <View style={styles.bannerHandleBar} />

      <View style={styles.bannerBody}>
        {!coordinates ? <ChooseLocationText /> : <LocationInfo location={coordinates} />}
      </View>
    </View>
  );
};

const ChooseLocationText: React.FC = () => {
  return (
    <Header fontWeight="semibold" variant="h4">
      اختر مكانا...
    </Header>
  );
};

const LocationInfo: React.FC<{location: LocationCords}> = ({location}) => {
  const {onConfirm} = useChoosingLocationState();
  const {adress, isLoading} = useFromLocationCoordsToAdress(location);

  const handleConfirmPress = () => {
    onConfirm.value?.({name: adress!, coordinates: location});
  };

  return isLoading ? (
    <Loader size={40} color="primary" />
  ) : (
    <>
      <Header align="center" variant="h4" fontWeight="semibold">
        {adress}
      </Header>
      <Button style={styles.confirmButton} onPress={handleConfirmPress} icon={ICONS.done}>
        تأكيد الموقع
      </Button>
    </>
  );
};

export {ChoosedLocationBanner};
