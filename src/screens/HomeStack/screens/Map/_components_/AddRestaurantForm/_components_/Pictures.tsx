import {View, Image, Pressable, Dimensions, Animated, TouchableOpacity} from 'react-native';
import React, {useEffect, useMemo, useRef, useState} from 'react';
import Carousel from 'react-native-snap-carousel';
import {launchImageLibrary} from 'react-native-image-picker';

import {styles} from '../AddRestaurantForm.style';

import {ICONS} from '../../../../../../../utils/constants/Icons';

import {useAddRestaurantFormContext} from '../_hooks_/useAddRestaurantFormContext';

import {Header} from '../../../../../../../components/Header/Header';

const Pictures: React.FC = () => {
  const {restaurantInfo} = useAddRestaurantFormContext();
  const {pictures} = restaurantInfo;

  const [activeIndex, setActiveIndex] = useState<number>(pictures.length);

  return (
    <View style={styles.picturesContainer}>
      <Carousel
        data={[...pictures, undefined]}
        sliderWidth={Dimensions.get('screen').width}
        itemWidth={Dimensions.get('screen').width - 180}
        firstItem={pictures.length}
        onSnapToItem={setActiveIndex}
        inactiveSlideOpacity={0.6}
        renderItem={({item, index}) => (
          <CarouselItem activeIndex={activeIndex} index={index} uri={item?.uri} />
        )}
      />
    </View>
  );
};

interface Props {
  index: number;
  activeIndex: number;
  uri?: string;
}

const CarouselItem: React.FC<Props> = ({activeIndex, index, uri}) => {
  return !uri ? <AddPicture /> : <Picture uri={uri} isActive={index === activeIndex} />;
};

const AddPicture: React.FC = () => {
  const {restaurantInfo, setRestaurantInfo} = useAddRestaurantFormContext();

  const handlePress = async () => {
    const {assets} = await launchImageLibrary({
      mediaType: 'photo',
      quality: 0.3,
      selectionLimit: 5,
      includeBase64: true,
    });
    if (!assets?.length) {
      return;
    }

    const pictures = [...restaurantInfo.pictures];

    assets.forEach(({uri, base64}) => {
      uri && base64 && pictures.push({uri, base64});
    });

    setRestaurantInfo({...restaurantInfo, pictures});
  };

  return (
    <Pressable style={styles.addPicture} onPress={handlePress}>
      <View style={styles.addPictureIconContainer}>
        <Image source={ICONS.addPicture} style={styles.addPictureIcon} resizeMode="contain" />
      </View>
      <Header fontWeight="semibold">أضف صورة</Header>
    </Pressable>
  );
};

interface PictureProps {
  isActive: boolean;
  uri: string;
}

const Picture: React.FC<PictureProps> = props => {
  return (
    <>
      <Image source={{uri: props.uri}} style={styles.picture} resizeMode="cover" />
      <DeletePictureButton {...props} />
    </>
  );
};

const DeletePictureButton: React.FC<PictureProps> = ({uri: currentUri, isActive}) => {
  const {restaurantInfo, setRestaurantInfo} = useAddRestaurantFormContext();
  const opacity = useRef(new Animated.Value(0)).current;

  const showButton = useMemo(() => {
    return Animated.timing(opacity, {
      toValue: 1,
      useNativeDriver: true,
      duration: 200,
    }).start;
  }, [opacity]);

  const hideButton = useMemo(() => {
    return Animated.timing(opacity, {
      toValue: 0,
      useNativeDriver: true,
      duration: 200,
    }).start;
  }, [opacity]);

  useEffect(() => {
    if (isActive) {
      showButton();
    } else {
      hideButton();
    }
  }, [isActive, showButton, hideButton]);

  const handlePress = () => {
    if (!isActive) {
      return;
    }

    const pictures = restaurantInfo.pictures.filter(({uri}) => uri !== currentUri);
    setRestaurantInfo({...restaurantInfo, pictures});
  };

  return (
    <Animated.View style={{opacity}}>
      <TouchableOpacity
        onPress={handlePress}
        activeOpacity={0.9}
        style={styles.deletePicButtonContainer}>
        <Header color="red" fontWeight="semibold">
          حذف الصورة
        </Header>

        <Image source={ICONS.trash} style={styles.deleteIcon} resizeMode="contain" />
      </TouchableOpacity>
    </Animated.View>
  );
};

export {Pictures};
