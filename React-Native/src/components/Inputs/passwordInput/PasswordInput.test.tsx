import React from 'react';
import renderer from 'react-test-renderer';

import {PasswordInput} from './PasswordInput';

describe('<PasswordInput />', () => {
  it('should render correctly', () => {
    const props: any = {};
    const tree = renderer.create(<PasswordInput {...props} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
