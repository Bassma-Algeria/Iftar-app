import React from 'react';
import renderer from 'react-test-renderer';

import {Welcom} from './Welcom';

describe('<WelcomScreen />', () => {
  const defaultProps = {};
  const wrapper = renderer.create(<Welcom {...defaultProps} />);

  it.skip('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
