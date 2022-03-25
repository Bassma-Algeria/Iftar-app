import React, {useState} from 'react';
import {View} from 'react-native';

import {styles} from '../../../Login.style';

import {restaurentOwner} from '../../../../../../../Gateways';

import {useLoginContext} from '../_hooks_/UseLoginContext';

import {Button} from '../../../../../../../components/Button/Button';
import {Loader} from '../../../../../../../components/Loader/Loader';

const SubmitButton: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const {loginInfo, setServerError} = useLoginContext();

  const handleSubmit = () => {
    if (!loginInfo.email && !loginInfo.password) {
      //Will add shaker
      return;
    }

    setIsLoading(true);
    restaurentOwner
      .login(loginInfo)
      .then(resp => console.log(resp))
      .catch(err => setServerError(err.message))
      .finally(() => setIsLoading(false));
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
