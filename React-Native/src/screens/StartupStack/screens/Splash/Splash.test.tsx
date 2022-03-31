import React from 'react';
import renderer from 'react-test-renderer';

import {Splash} from './Splash';

describe('Splash Screen', () => {
  it('should render correctly', () => {
    const props: any = {};
    const tree = renderer.create(<Splash {...props} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
