import React from 'react';
// import AnimatedLoader from 'react-native-animated-loader';

import {Loader as BaseLoader} from '../../../../../../components/Loader/Loader';

import {styles} from '../../Splash.style';

interface Props {}

const Loader: React.FC<Props> = () => {
  return <BaseLoader style={styles.loader} color="brown" size={30} />;
};

export {Loader};
