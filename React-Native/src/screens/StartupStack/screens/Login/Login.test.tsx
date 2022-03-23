import React from 'react';
import renderer from 'react-test-renderer';

import {Login} from './Login';

describe('Login Screen', () => {
  it('should render correctly', () => {
    const props: any = {};
    const tree = renderer.create(<Login {...props} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
