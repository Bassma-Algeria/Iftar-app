import React from 'react';
import {action} from '@storybook/addon-actions';
import {storiesOf} from '@storybook/react-native';

import {Button} from './Button';
import {ICONS} from '../../utils/constants/Icons';

const buttonStories = storiesOf('Button', module);

buttonStories.add('Without Icon', () => <Button onPress={action('clicked')}>إبدأ الآن !</Button>);

buttonStories.add('With Icon', () => (
  <Button onPress={action('clicked')} icon={ICONS.leftArrow}>
    إبدأ الآن !
  </Button>
));

buttonStories.add('inactive', () => (
  <Button onPress={action('clicked')} inactive icon={ICONS.leftArrow}>
    إبدأ الآن !
  </Button>
));
