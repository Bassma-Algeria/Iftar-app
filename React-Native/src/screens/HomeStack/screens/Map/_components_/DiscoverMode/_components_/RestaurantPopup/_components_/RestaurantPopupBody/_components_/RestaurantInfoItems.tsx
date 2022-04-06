import {View, ImageSourcePropType, Image} from 'react-native';
import React from 'react';

import {styles} from '../../../../../DiscoverMode.style';

import type {Time} from '../../../../../../../../../../../Gateways/RestaurantsGateway/RestaurantsGateway.interface';

import {ICONS} from '../../../../../../../../../../../utils/constants/Icons';

import {Header} from '../../../../../../../../../../../components/Header/Header';

interface Props {
  workingTime: {closing: Time; opening: Time};
  ownerNumber: string;
  locationName: string;
}

const RestaurantInfoItems: React.FC<Props> = props => {
  const openingTime = getTimePresention(props.workingTime.opening);
  const closingTime = getTimePresention(props.workingTime.closing);
  const ownerNumber = formatPhoneNumber(props.ownerNumber);

  return (
    <View style={styles.restaurantInfoItems}>
      <InfoItem
        icon={ICONS.clockBrown}
        iconWidth={'80%'}
        text={`من الساعة ${openingTime} إلى الساعة ${closingTime}`}
      />
      <InfoItem icon={ICONS.location} text={props.locationName} />
      <InfoItem icon={ICONS.phone} text={ownerNumber} />
    </View>
  );
};

const InfoItem: React.FC<{text: string; icon: ImageSourcePropType; iconWidth?: string}> = props => {
  const width = props.iconWidth || '70%';

  return (
    <View style={styles.restaurantInfoItem}>
      <View style={styles.itemIconContainer}>
        <Image resizeMode="contain" style={{width}} source={props.icon} />
      </View>

      <Header align="right" variant="h5">
        {props.text}
      </Header>
    </View>
  );
};

const getTimePresention = (time: Time) => {
  const {hour, minute} = time;

  return `${hour}`.padStart(2, '0') + ':' + `${minute}`.padStart(2, '0');
};

const formatPhoneNumber = (phoneNumber: string): string => {
  let s: string = '';

  for (let i = 0; i < phoneNumber.length; i++) {
    s += phoneNumber[i];
    if (i % 2) {
      s += ' ';
    }
  }

  return s;
};

export {RestaurantInfoItems};
