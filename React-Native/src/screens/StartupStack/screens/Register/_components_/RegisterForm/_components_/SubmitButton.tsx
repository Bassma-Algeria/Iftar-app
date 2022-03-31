import React, {useState} from 'react';
import {View} from 'react-native';

import {styles} from '../../../Register.style';

import {restaurentOwner} from '../../../../../../../Gateways';

import {useRegisterContext} from '../_hooks_/UseRegisterContext';

import {Button} from '../../../../../../../components/Button/Button';
import {Loader} from '../../../../../../../components/Loader/Loader';

import {localStorage} from '../../../../../../../utils/helpers/LocalStorage';
import {useNavigation} from '@react-navigation/native';
import {HomeStackScreenProps} from '../../../../../../HomeStack/HomeStack.types';

interface Props {}

const SubmitButton: React.FC<Props> = ({}) => {
  const navigation = useNavigation<HomeStackScreenProps<'Map'>['navigation']>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const {registerInfo, setServerError} = useRegisterContext();

  const handleSubmit = () => {
    if (
      !registerInfo.email &&
      !registerInfo.password &&
      !registerInfo.confirmPassword &&
      !registerInfo.phoneNumber
    ) {
      //Will add shaker
      return;
    }

    setIsLoading(true);
    restaurentOwner
      .signup(registerInfo)
      .then(resp => {
        console.log(resp);
        localStorage.save('token', resp);
      })
      .catch(err => setServerError(err.message))
      .finally(() => {
        setIsLoading(false);
        navigation.navigate('Map');
      });
  };

  return (
    <View style={styles.registerButton}>
      <Button onPress={handleSubmit}>
        {isLoading ? <Loader size={31} color="whiteShade" /> : 'تسجيل '}
      </Button>
    </View>
  );
};

export {SubmitButton};
