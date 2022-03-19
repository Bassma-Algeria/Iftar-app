import React from 'react';

import {storiesOf} from '@storybook/react-native';

import {Input} from './Input';

const InputStories = storiesOf('Input', module);

InputStories.add('Input', () => <Input />);
