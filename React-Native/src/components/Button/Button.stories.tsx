import React from 'react';
import {action} from '@storybook/addon-actions';
import {storiesOf} from '@storybook/react-native';

import {Button} from './Button';

const buttonStories = storiesOf('Button', module);

buttonStories.add('Default', () => (
  <Button onPress={action('clicked')} label={'click'} />
));
