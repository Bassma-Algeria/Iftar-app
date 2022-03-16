import React from 'react';

import {storiesOf} from '@storybook/react-native';

import {Logo} from './Logo';

const LogoStories = storiesOf('Logo', module);

LogoStories.add('Without animation', () => <Logo />);
// LogoStories.add('With animation', () => <Logo />);
