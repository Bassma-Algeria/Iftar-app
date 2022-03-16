import React from 'react';
import renderer from 'react-test-renderer';

import {Welcom} from './Welcom';

describe('<WelcomScreen />', () => {
  it('should render correctly', () => {
    const props: any = {};
    const tree = renderer.create(<Welcom {...props} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
