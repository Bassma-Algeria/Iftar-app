import React from 'react';
import renderer from 'react-test-renderer';
import {AuthContextProvider} from '../../../_context_/AuthContextProvider';

import {Splash} from './Splash';

describe('Splash Screen', () => {
  it('should render correctly', () => {
    const props: any = {navigation: {navigate: jest.fn(), replace: jest.fn()}};
    const tree = renderer
      .create(
        <AuthContextProvider>
          <Splash {...props} />
        </AuthContextProvider>,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
