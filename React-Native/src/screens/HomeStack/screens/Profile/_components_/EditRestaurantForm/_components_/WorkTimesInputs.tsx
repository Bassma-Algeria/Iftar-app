import {Pressable, View} from 'react-native';
import React, {useState} from 'react';
import DateTimePicker, {DateTimePickerEvent} from '@react-native-community/datetimepicker';

import {styles} from '../../../Profile.style';

import {ICONS} from '../../../../../../../utils/constants/Icons';

import {useEditRestaurantFormContext} from '../_hooks_/useEditRestaurantFormContext';

import type {Time} from '../../../../../../../Gateways/RestaurantsGateway/RestaurantsGateway.interface';

import {Input} from '../../../../../../../components/Inputs/TextInput/Input';
import {COLORS} from '../../../../../../../theme/Colors';

const WorkTimesInputs: React.FC = () => {
  const {restaurantInfo, setRestaurantInfo} = useEditRestaurantFormContext();

  const handleTimeChange = (variant: 'opening' | 'closing') => (time: Time) => {
    const workingTime = {...restaurantInfo.workingTime, [variant]: time};
    setRestaurantInfo({...restaurantInfo, workingTime});
  };

  return (
    <View style={styles.workTimesContainer}>
      <TimeInput
        placeholder="الى"
        value={restaurantInfo.workingTime.closing}
        onChange={handleTimeChange('closing')}
      />
      <TimeInput
        placeholder="من"
        value={restaurantInfo.workingTime.opening}
        onChange={handleTimeChange('opening')}
      />
    </View>
  );
};

interface Props {
  placeholder: string;
  value: Time;
  onChange: (time: Time) => void;
}

const TimeInput: React.FC<Props> = ({value, onChange, placeholder}) => {
  const timeToShow = getTimeToShow(value);
  const [showTimePicker, setShowTimePicker] = useState<boolean>(false);

  const onTimeChange = (e: DateTimePickerEvent) => {
    setShowTimePicker(false);
    if (!e.nativeEvent.timestamp) {
      return;
    }

    const time = new Date(e.nativeEvent.timestamp);
    onChange({hour: time.getHours(), minut: time.getMinutes()});
  };

  return (
    <>
      <Pressable style={styles.workTimeInput} onPress={() => setShowTimePicker(true)}>
        <Input
          placeholder={placeholder}
          icon={ICONS.clock}
          value={timeToShow}
          backgroundColor="beige"
          placeholderColor={COLORS.greyShade}
          onTextChange={() => {}}
          disable
        />
      </Pressable>
      {showTimePicker && (
        <DateTimePicker value={new Date()} mode={'time'} is24Hour={true} onChange={onTimeChange} />
      )}
    </>
  );
};

const getTimeToShow = (time: Time): string => {
  const {hour, minut} = time;
  if (!hour && !minut) {
    return '';
  }

  return `${hour}`.padStart(2, '0') + ':' + `${minut}`.padStart(2, '0');
};

export {WorkTimesInputs};
