import React from 'react';
import renderer from 'react-test-renderer';

import {Register} from './Register';

describe('<RegisterScreen />', () => {
  it('should render correctly', () => {
    const props: any = {};
    const tree = renderer.create(<Register {...props} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
