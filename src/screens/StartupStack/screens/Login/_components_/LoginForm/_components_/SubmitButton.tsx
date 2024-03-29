import React, {useState} from 'react';
import {View} from 'react-native';

import {styles} from '../../../Login.style';

import {authGateway} from '../../../../../../../Gateways';

import {useLoginContext} from '../_hooks_/UseLoginContext';

import {Button} from '../../../../../../../components/Button/Button';
import {Loader} from '../../../../../../../components/Loader/Loader';

import {localStorage} from '../../../../../../../utils/helpers/LocalStorage';
import {useNavigation} from '@react-navigation/native';
import {MainStackScreenProps} from '../../../../../../MainStack.types';
import {useAuthContext} from '../../../../../../_hooks_/useAuthContext';

interface Props {}
const SubmitButton: React.FC<Props> = () => {
  const {setIsRestaurantOwner} = useAuthContext();
  const navigation = useNavigation<MainStackScreenProps<'HomeStack'>['navigation']>();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const {loginInfo, setServerError} = useLoginContext();

  const handleSubmit = async () => {
    if (!loginInfo.email || !loginInfo.password) {
      //Will add shaker
      return;
    }

    try {
      setIsLoading(true);

      const token = await authGateway.login(loginInfo);
      await localStorage.save('token', token);

      setIsRestaurantOwner(true);
      navigation.replace('StartupStack', {screen: 'ChooseUsageType'});
      navigation.navigate('HomeStack', {screen: 'Map'});
    } catch (error: any) {
      setIsLoading(false);

      if (error.credentials) {
        return setServerError('بريد إلكتروني أو كلمة المرور خاطئة');
      }

      setServerError('حدث خطأ ما ، يرجى التحقق من اتصالك بالإنترنت والمحاولة مرة أخرى');
    }
  };

  return (
    <View style={styles.loginButton}>
      <Button onPress={handleSubmit}>
        {isLoading ? <Loader size={31} color="whiteShade" /> : 'تسجيل الدخول'}
      </Button>
    </View>
  );
};

export {SubmitButton};
