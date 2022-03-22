import React, {useState} from 'react';

import {storiesOf} from '@storybook/react-native';

import {Popup} from './Popup';
import {Button, View} from 'react-native';
import {Header} from '../Header/Header';

const PopupStories = storiesOf('Popup', module);

const Component = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <View>
      <Button title="toggle popup" onPress={() => setIsOpen(!isOpen)} />
      <Popup isOpen={isOpen}>
        <Header style={{margin: 40}} variant="h1">
          Some Content
        </Header>
      </Popup>
    </View>
  );
};

PopupStories.add('Default', () => <Component />);
