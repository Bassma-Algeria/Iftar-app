import React, {useState} from 'react';
import {Button} from 'react-native';
import {storiesOf} from '@storybook/react-native';
import {NavigationContainer} from '@react-navigation/native';

import {Popup} from './Popup';
import {Header} from '../Header/Header';

const PopupStories = storiesOf('Popup', module);

const Component = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <NavigationContainer>
      <Button title="toggle popup" onPress={() => setIsOpen(true)} />
      <Popup isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <Header style={{margin: 40}} variant="h1">
          Some Content
        </Header>
      </Popup>
    </NavigationContainer>
  );
};

PopupStories.add('Default', () => <Component />);
