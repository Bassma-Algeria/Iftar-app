import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import {Search} from './Search';

describe('HomeStack -> Search Screen', () => {
  const props: any = {};

  it.skip('should renders correctly', () => {
    const tree = renderer.create(<Search {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
