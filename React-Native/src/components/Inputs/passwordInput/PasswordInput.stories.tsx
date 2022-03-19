import React from 'react';

import {storiesOf} from '@storybook/react-native';

import {PasswordInput} from './PasswordInput';

const PasswordInputStories = storiesOf('PasswordInput', module);

PasswordInputStories.add('PasswordInput', () => <PasswordInput />);
