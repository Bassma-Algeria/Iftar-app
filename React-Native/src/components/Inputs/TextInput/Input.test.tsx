import React from 'react';
import renderer from 'react-test-renderer';

import {Input} from './Input';

describe('<Input />', () => {
  it('should render correctly', () => {
    const props: any = {};
    const tree = renderer.create(<Input {...props} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
