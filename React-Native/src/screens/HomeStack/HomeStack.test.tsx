import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import {NavigationContainer} from '@react-navigation/native';

import {HomeStack} from './HomeStack';
import {AuthContextProvider} from '../_context_/AuthContextProvider';

describe('HomeStack', () => {
  const props: any = {};

  it('should renders correctly', () => {
    const tree = renderer
      .create(
        <NavigationContainer>
          <AuthContextProvider>
            <HomeStack {...props} />
          </AuthContextProvider>
        </NavigationContainer>,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
