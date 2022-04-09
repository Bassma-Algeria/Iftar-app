import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import renderer from 'react-test-renderer';
import {AuthContextProvider} from '../_context_/AuthContextProvider';

import {StartupStack} from './StartupStack';

describe('StartupStack', () => {
  it('should render correctly', () => {
    const defaultProps: any = {};

    const tree = renderer
      .create(
        <AuthContextProvider>
          <NavigationContainer>
            <StartupStack {...defaultProps} />
          </NavigationContainer>
        </AuthContextProvider>,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
