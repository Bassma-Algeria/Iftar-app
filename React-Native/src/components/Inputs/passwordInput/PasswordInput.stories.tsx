import React from 'react';

import {storiesOf} from '@storybook/react-native';

import {PasswordInput} from './PasswordInput';

const PasswordInputStories = storiesOf('PasswordInput', module);

const props: any = {placeholder: 'كلمة المرور'};

PasswordInputStories.add('PasswordInput', () => <PasswordInput {...props} />);
