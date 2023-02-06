import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {View} from 'react-native';

import {styles} from '../../../Register.style';

import {authGateway} from '../../../../../../../Gateways';
import type {MainStackScreenProps} from '../../../../../../MainStack.types';

import {useRegisterContext} from '../_hooks_/UseRegisterContext';

import {Button} from '../../../../../../../components/Button/Button';
import {Loader} from '../../../../../../../components/Loader/Loader';

import {localStorage} from '../../../../../../../utils/helpers/LocalStorage';
import {useAuthContext} from '../../../../../../_hooks_/useAuthContext';

interface Props {}

const SubmitButton: React.FC<Props> = ({}) => {
  const navigation = useNavigation<MainStackScreenProps<'HomeStack'>['navigation']>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const {registerInfo, setServerError} = useRegisterContext();
  const {setIsRestaurantOwner} = useAuthContext();

  const handleSubmit = async () => {
    if (isOneRegiterValueEmpty(registerInfo)) {
      //Will add shaker
      return;
    }

    try {
      setIsLoading(true);

      const token = await authGateway.signup(registerInfo);
      await localStorage.save('token', token);

      setIsRestaurantOwner(true);
      navigation.replace('StartupStack', {screen: 'ChooseUsageType'});
      navigation.navigate('HomeStack', {screen: 'Map'});
    } catch (error: any) {
      setIsLoading(false);

      if (error.email) {
        return setServerError('بريد إلكتروني مستخدم');
      }

      if (error.phoneNumber) {
        return setServerError('رقم الهاتف مستخدم');
      }

      setServerError('حدث خطأ ما ، يرجى التحقق من اتصالك بالإنترنت والمحاولة مرة أخرى');
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
