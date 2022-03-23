import {Pressable, View} from 'react-native';
import React, {useState} from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';

import {styles} from '../../../AddRestaurant.style';

import {ICONS} from '../../../../../../../../../utils/constants/Icons';

import {useAddRestaurantContext} from '../../../_hooks_/useAddRestaurantContext';

import {Input} from '../../../../../../../../../components/Inputs/TextInput/Input';

const WorkTimesInputs = () => {
  const [showPicker, setShowPicker] = useState<boolean>(false);
  const {restaurantInfo, setRestaurantInfo} = useAddRestaurantContext();

  return (
    <View style={styles.workTimesContainer}>
      <Pressable style={styles.workTimeInput}>
        <Input
          placeholder="الى"
          icon={ICONS.clock}
          value={'helo'}
          onTextChange={t => setRestaurantInfo({...restaurantInfo, closingTime: t})}
          disable
        />
      </Pressable>

      {/* {showPicker && (
        <DateTimePicker
          value={new Date()}
          mode={'time'}
          is24Hour={true}
          // onChange={v => console.log(new Date(v.nativeEvent.timestamp))}
        />
      )} */}

      <Pressable style={styles.workTimeInput}>
        <Input
          placeholder="من"
          icon={ICONS.clock}
          value={restaurantInfo.openingTime}
          onTextChange={t => setRestaurantInfo({...restaurantInfo, openingTime: t})}
          disable
        />
      </Pressable>
    </View>
  );
};

export {WorkTimesInputs};
