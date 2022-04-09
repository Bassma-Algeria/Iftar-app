import React from 'react';
import {action} from '@storybook/addon-actions';
import {storiesOf} from '@storybook/react-native';

import {IconButton} from './IconButton';
import {ICONS} from '../../utils/constants/Icons';

const IconButtonStories = storiesOf('IconButton', module);

IconButtonStories.add('default', () => (
  <IconButton onPress={action('clicked')} icon={ICONS.profile} />
));
