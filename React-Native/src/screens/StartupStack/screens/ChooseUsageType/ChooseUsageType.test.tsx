import React from 'react';
import renderer from 'react-test-renderer';

import {ChooseUsageType} from './ChooseUsageType';

describe('ChooseUsageType Screen ', () => {
  it('should render correctly', () => {
    const props: any = {};
    const tree = renderer.create(<ChooseUsageType {...props} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
