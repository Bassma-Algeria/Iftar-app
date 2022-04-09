import React from 'react';
import renderer from 'react-test-renderer';
import {AuthContextProvider} from '../../../_context_/AuthContextProvider';

import {ChooseUsageType} from './ChooseUsageType';

describe('ChooseUsageType Screen ', () => {
  it('should render correctly', () => {
    const props: any = {};
    const tree = renderer
      .create(
        <AuthContextProvider>
          <ChooseUsageType {...props} />
        </AuthContextProvider>,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
