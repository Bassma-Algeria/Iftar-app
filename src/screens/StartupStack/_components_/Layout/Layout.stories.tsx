import React from 'react';
import {storiesOf} from '@storybook/react-native';

import {Layout} from './Layout';

const LayoutStories = storiesOf('Start Screens Layout', module);

LayoutStories.add('Default', () => <Layout />);
