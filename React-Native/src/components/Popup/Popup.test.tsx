import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import {Popup} from './Popup';
import {Text} from 'react-native';

describe('Popup Component', () => {
  it('should render correclty and closed when isOpen is false', () => {
    const tree = renderer
      .create(
        <Popup isOpen={false}>
          <Text>Some content</Text>
        </Popup>,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should open when passing an isOpen prop', () => {
    const tree = renderer
      .create(
        <Popup isOpen>
          <Text>Some content</Text>
        </Popup>,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
