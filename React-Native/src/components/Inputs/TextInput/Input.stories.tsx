import React from 'react';

import {storiesOf} from '@storybook/react-native';

import {Input} from './Input';
import {ICONS} from '../../../utils/constants/Icons';

const InputStories = storiesOf('Input', module);

const props: any = {icon: ICONS.email, placeholder: 'البريد الالكتروني'};

InputStories.add('Default', () => <Input {...props} />);
InputStories.add('Icon reversed', () => <Input {...props} iconPosition="right" />);
