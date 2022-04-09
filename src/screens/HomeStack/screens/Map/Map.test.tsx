import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import {Map} from './Map';
import {AuthContextProvider} from '../../../_context_/AuthContextProvider';

describe('HomeStack -> Map Screen', () => {
  const props: any = {};

  it('should renders correctly', () => {
    const tree = renderer
      .create(
        <AuthContextProvider>
          <Map {...props} />
        </AuthContextProvider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
