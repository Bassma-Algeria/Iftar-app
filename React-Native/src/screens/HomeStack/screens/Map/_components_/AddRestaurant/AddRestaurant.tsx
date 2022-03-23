import {Image, Pressable, View} from 'react-native';
import React, {useState} from 'react';

import {styles} from './AddRestaurant.style';

import {ICONS} from '../../../../../../utils/constants/Icons';

import {Button} from '../../../../../../components/Button/Button';
import {Popup} from '../../../../../../components/Popup/Popup';
import {Header} from '../../../../../../components/Header/Header';
import {Input} from '../../../../../../components/Inputs/TextInput/Input';

const AddRestaurant: React.FC = () => {
  const [isAddingRestaurantFormOpened, setIsAddingRestaurantFormOpened] = useState<boolean>(false);

  return (
    <>
      <AddRestaurantButton setIsPopupOpen={setIsAddingRestaurantFormOpened} />
      <AddRestaurantFormPopup
        isOpen={isAddingRestaurantFormOpened}
        setIsPopupOpen={setIsAddingRestaurantFormOpened}
      />
    </>
  );
};

interface Props {
  setIsPopupOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddRestaurantButton: React.FC<Props> = ({setIsPopupOpen}) => {
  return (
    <Button
      onPress={() => setIsPopupOpen(true)}
      style={styles.addRestaurantButtonContainer}
      icon={ICONS.plus}>
      أضف مطعم
    </Button>
  );
};

const AddRestaurantFormPopup: React.FC<Props & {isOpen: boolean}> = ({isOpen, setIsPopupOpen}) => {
  return (
    <Popup
      containerStyle={styles.container}
      onClose={() => setIsPopupOpen(false)}
      isOpen={isOpen}
      fullHight>
      <View>
        <View style={styles.inputsContainer}>
          <Header style={styles.title} align="center">
            يرجى إدخال بعض المعلومات الخاصة بالمطعم
          </Header>

          <Input placeholder="اسم مالك المطعم" style={styles.input} icon={ICONS.profilePrimary} />
          <Input placeholder="اسم المطعم" style={styles.input} icon={ICONS.edit} />
          <Input placeholder="الموقع" style={styles.input} icon={ICONS.locationFilled} />

          <Header>اوقات العمل</Header>
          <View style={styles.workTimesContainer}>
            <Input placeholder="الى" style={styles.workTimeInput} icon={ICONS.clock} />
            <Input placeholder="من" style={styles.workTimeInput} icon={ICONS.clock} />
          </View>
        </View>

        <Pictures />
      </View>

      <Button style={styles.confirmInfoButtonContainer} icon={ICONS.done}>
        تأكيد المعلومات
      </Button>
    </Popup>
  );
};

const Pictures: React.FC = () => {
  return (
    <View style={styles.picturesContainer}>
      <Pressable style={styles.addPicture}>
        <View style={styles.addPictureIconContainer}>
          <Image source={ICONS.addPicture} style={styles.addPictureIcon} resizeMode="contain" />
        </View>
        <Header fontWeight="semibold">أضف صورة</Header>
      </Pressable>
    </View>
  );
};

export {AddRestaurant};
