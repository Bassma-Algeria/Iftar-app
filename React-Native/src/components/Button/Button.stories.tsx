import React from 'react';
import {action} from '@storybook/addon-actions';
import {storiesOf} from '@storybook/react-native';

import {Button} from './Button';
import {ICONS} from '../../utils/constants/Icons';

const buttonStories = storiesOf('Button', module);

buttonStories.add('Without Icon', () => (
  <Button onPress={action('clicked')} label={'إبدأ الآن !'} />
));

buttonStories.add('With Icon', () => (
  <Button
    onPress={action('clicked')}
    label={'إبدأ الآن !'}
    icon={ICONS.leftArrow}
  />
));
