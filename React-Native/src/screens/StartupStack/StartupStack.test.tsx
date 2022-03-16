import React from 'react';
import renderer from 'react-test-renderer';

import {StartupStack} from './StartupStack';

describe('<StartupStack />', () => {
  it.skip('should render correctly', () => {
    const defaultProps: any = {};
    const tree = renderer.create(<StartupStack {...defaultProps} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
