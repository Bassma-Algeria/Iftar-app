import React from 'react';
import {Dimensions, Image, View} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import {Header} from '../../../../../../../../../components/Header/Header';

import {styles} from '../../../../../Map.style';

interface Props {
  pictures: string[];
}

const RestaurantPics: React.FC<Props> = ({pictures}) => {
  return pictures.length ? (
    <PicturesCarousel pictures={pictures} />
  ) : (
    <PicturesPlacholder />
  );
};

const PicturesPlacholder = () => {
  return (
    <View style={styles.picturesPlaceholder}>
      <Header align="center" fontWeight="bold" variant="h4">
        لا توجد صور
      </Header>
    </View>
  );
};

const PicturesCarousel: React.FC<Props> = ({pictures}) => {
  return (
    <Carousel
      data={pictures}
      renderItem={({item}) => <Picture link={item} />}
      sliderWidth={Dimensions.get('screen').width}
      itemWidth={Dimensions.get('screen').width - 80}
      firstItem={pictures.length - 1}
      inactiveSlideOpacity={1}
    />
  );
};

const Picture: React.FC<{link: string}> = ({link}) => {
  return <Image style={styles.restaurantPic} source={{uri: link}} />;
};

export {RestaurantPics};
