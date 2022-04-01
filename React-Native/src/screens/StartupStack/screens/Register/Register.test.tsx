import React from 'react';
import renderer from 'react-test-renderer';
import {AuthContextProvider} from '../../../_context_/AuthContextProvider';

import {Register} from './Register';

describe('Register Screen', () => {
  it('should render correctly', () => {
    const tree = renderer
      .create(
        <AuthContextProvider>
          <Register />
        </AuthContextProvider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
