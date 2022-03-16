import React from 'react';
import {ScrollView, View} from 'react-native';

import {styles} from './Layout.style';
import {Lanterns} from './_components_/Lanterns';

interface Props {}

const Layout: React.FC<Props> = ({children}) => {
  return (
    <ScrollView style={styles.background}>
      <Lanterns />

      <View style={styles.content}>{children}</View>
    </ScrollView>
  );
};

export {Layout};
