import React from 'react';
import renderer from 'react-test-renderer';

import {Register} from './Register';

describe('<RegisterScreen />', () => {
  it('should render correctly', () => {
    const tree = renderer.create(<Register />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
