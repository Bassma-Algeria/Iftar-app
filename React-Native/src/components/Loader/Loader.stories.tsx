import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {Loader} from './Loader';

const LoaderStories = storiesOf('Loader', module);

LoaderStories.add('Default', () => <Loader />);
LoaderStories.add('Bigger', () => <Loader size={40} />);
LoaderStories.add('Another Color and style', () => (
  <Loader style={{padding: 30}} color="brown" size={50} />
));
