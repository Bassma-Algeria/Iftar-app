import React, {useState} from 'react';
import {View} from 'react-native';

import {styles} from '../../../Login.style';

import {restaurentOwner} from '../../../../../../../Gateways';

import {useLoginContext} from '../_hooks_/UseLoginContext';

import {Button} from '../../../../../../../components/Button/Button';
import {Loader} from '../../../../../../../components/Loader/Loader';

import {localStorage} from '../../../../../../../utils/helpers/LocalStorage';
import {useNavigation} from '@react-navigation/native';
import {MainStackScreenProps} from '../../../../../../MainStack.types';

interface Props {}
const SubmitButton: React.FC<Props> = () => {
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

      const token = await restaurentOwner.login(loginInfo);
      await localStorage.save('token', token);

      navigation.replace('HomeStack', {screen: 'Map'});
    } catch (error: any) {
      setServerError(error.message);
    } finally {
      setIsLoading(false);
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
