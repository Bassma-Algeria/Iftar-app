import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import {Map} from './Map';

describe('HomeStack -> Map Screen', () => {
  const props: any = {};

  it.skip('should renders correctly', () => {
    const tree = renderer.create(<Map {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
