import React from 'react';
import {View, ScrollView} from 'react-native';

import {styles} from './Profile.style';

import {ProfileContextProvider} from './_context_/ProfileContextProvider';

import {TopHead} from './_components_/TopHead';
import {RestaurantsList} from './_components_/RestaurantsList';
import {EditRestaurantFormPopup} from './_components_/EditRestaurantForm/EditRestaurantForm';
import {LogoutButton} from './_components_/LogoutButton';

interface Props {}

const Profile: React.FC<Props> = () => {
  return (
    <ProfileContextProvider>
      <ScrollView style={styles.container}>
        <TopHead />

        <View style={styles.content}>
          <RestaurantsList />
        </View>
      </ScrollView>

      <LogoutButton />
      <EditRestaurantFormPopup />
    </ProfileContextProvider>
  );
};

export {Profile};
