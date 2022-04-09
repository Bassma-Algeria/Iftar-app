import React from 'react';
import {render} from '@testing-library/react-native';

import {Profile} from './Profile';

import {AuthContextProvider} from '../../../_context_/AuthContextProvider';

describe('HomeStack -> Profile Screen', () => {
  it('should render correctly', () => {
    let props: any = {};
    const instance = render(
      <AuthContextProvider>
        <Profile {...props} />
      </AuthContextProvider>,
    );

    expect(instance.toJSON()).toMatchSnapshot();
  });
});
