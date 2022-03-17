import {View, ImageSourcePropType, Image} from 'react-native';
import React from 'react';

import {styles} from '../../../Map.style';

import {ICONS} from '../../../../../../../utils/constants/Icons';

import {Header} from '../../../../../../../components/Header/Header';

interface Props {
  closingTime: Date;
  openingTime: Date;
  ownerNumber: string;
  location: {latitude: number; longitude: number};
}

// TODO: Change the hard coded values
const RestaurantInfoItems: React.FC<Props> = () => {
  return (
    <View style={styles.restaurantInfoItems}>
      <InfoItem icon={ICONS.clock} text={`من الساعة 17 إلى الساعة 22`} />
      <InfoItem icon={ICONS.location} text={`الحراش وسط`} />
      <InfoItem icon={ICONS.phone} text={`07 84 56 33 01`} />
    </View>
  );
};

const InfoItem: React.FC<{text: string; icon: ImageSourcePropType}> = props => {
  return (
    <View style={styles.restaurantInfoItem}>
      <View style={styles.itemIconContainer}>
        <Image
          resizeMode="contain"
          style={styles.itemIcon}
          source={props.icon}
        />
      </View>

      <Header variant="h5">{props.text}</Header>
    </View>
  );
};

export {RestaurantInfoItems};
