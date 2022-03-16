import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import {Logo} from './Logo';

describe('Logo Cpmponent', () => {
  it('should render correclty without animation', () => {
    const tree = renderer.create(<Logo />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
