import React from 'react';
import {Dimensions, Image} from 'react-native';
import Carousel from 'react-native-snap-carousel';

import {styles} from '../../../Map.style';

interface Props {
  pictures: string[];
}

const RestaurantPics: React.FC<Props> = ({pictures}) => {
  return (
    <Carousel
      data={pictures}
      renderItem={({item}) => <Pic link={item} />}
      sliderWidth={Dimensions.get('screen').width}
      itemWidth={Dimensions.get('screen').width - 80}
      firstItem={pictures.length - 1}
      inactiveSlideOpacity={1}
    />
  );
};

const Pic: React.FC<{link: string}> = ({link}) => {
  return <Image style={styles.restaurantPic} source={{uri: link}} />;
};

export {RestaurantPics};
