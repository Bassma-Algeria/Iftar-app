import {View, ImageSourcePropType, Image} from 'react-native';
import React from 'react';

import {styles} from '../../../../../Map.style';

import {ICONS} from '../../../../../../../../../utils/constants/Icons';

import {Header} from '../../../../../../../../../components/Header/Header';

interface Props {
  closingTime: Date;
  openingTime: Date;
  ownerNumber: string;
  adress: string;
}

const RestaurantInfoItems: React.FC<Props> = props => {
  const openingHour = props.openingTime.getHours();
  const closingHour = props.openingTime.getHours();

  return (
    <View style={styles.restaurantInfoItems}>
      <InfoItem icon={ICONS.clock} text={`من الساعة ${openingHour} إلى الساعة ${closingHour}`} />
      <InfoItem icon={ICONS.location} text={props.adress} />
      <InfoItem icon={ICONS.phone} text={props.ownerNumber} />
    </View>
  );
};

const InfoItem: React.FC<{text: string; icon: ImageSourcePropType}> = props => {
  return (
    <View style={styles.restaurantInfoItem}>
      <View style={styles.itemIconContainer}>
        <Image resizeMode="contain" style={styles.itemIcon} source={props.icon} />
      </View>

      <Header variant="h5">{props.text}</Header>
    </View>
  );
};

export {RestaurantInfoItems};
