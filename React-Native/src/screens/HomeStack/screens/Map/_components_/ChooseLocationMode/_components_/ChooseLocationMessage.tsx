import React from 'react';

import {styles} from '../ChooseLocationMode.style';
import {Header} from '../../../../../../../components/Header/Header';

const ChooseLocationMessage: React.FC = () => {
  return (
    <Header style={styles.chooseLocationMessage} variant="h4" align="center" fontWeight="semibold">
      اختر مكانا...
    </Header>
  );
};

export {ChooseLocationMessage};
