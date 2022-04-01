import React from 'react';
import renderer from 'react-test-renderer';
import {AuthContextProvider} from '../../../_context_/AuthContextProvider';

import {Login} from './Login';

describe('Login Screen', () => {
  it('should render correctly', () => {
    const props: any = {};
    const tree = renderer
      .create(
        <AuthContextProvider>
          <Login {...props} />
        </AuthContextProvider>,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
