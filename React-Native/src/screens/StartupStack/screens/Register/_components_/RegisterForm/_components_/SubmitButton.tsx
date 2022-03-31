import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {View} from 'react-native';

import {styles} from '../../../Register.style';

import {restaurentOwner} from '../../../../../../../Gateways';
import type {MainStackScreenProps} from '../../../../../../MainStack.types';

import {useRegisterContext} from '../_hooks_/UseRegisterContext';

import {Button} from '../../../../../../../components/Button/Button';
import {Loader} from '../../../../../../../components/Loader/Loader';

import {localStorage} from '../../../../../../../utils/helpers/LocalStorage';

interface Props {}

const SubmitButton: React.FC<Props> = ({}) => {
  const navigation = useNavigation<MainStackScreenProps<'HomeStack'>['navigation']>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const {registerInfo, setServerError} = useRegisterContext();

  const handleSubmit = async () => {
    if (isOneRegiterValueEmpty(registerInfo)) {
      //Will add shaker
      return;
    }

    try {
      setIsLoading(true);

      const token = await restaurentOwner.signup(registerInfo);
      await localStorage.save('token', token);

      navigation.navigate('HomeStack', {screen: 'Map'});
    } catch (error: any) {
      setServerError(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View style={styles.registerButton}>
      <Button onPress={handleSubmit}>
        {isLoading ? <Loader size={31} color="whiteShade" /> : 'تسجيل '}
      </Button>
    </View>
  );
};

const isOneRegiterValueEmpty = (registerInfo: any) => {
  return (
    !registerInfo.email ||
    !registerInfo.password ||
    !registerInfo.confirmPassword ||
    !registerInfo.phoneNumber
  );
};

export {SubmitButton};
