import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import {render} from '@testing-library/react-native';
import {NavigationContainer} from '@react-navigation/native';

import {Popup} from './Popup';
import {Text} from 'react-native';

describe('Popup Component', () => {
  it('should render correclty and closed when isOpen is false', () => {
    const tree = renderer
      .create(
        <NavigationContainer>
          <Popup isOpen={false}>
            <Text>Some content</Text>
          </Popup>
        </NavigationContainer>,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should open when isOpen is true', () => {
    const tree = renderer
      .create(
        <NavigationContainer>
          <Popup isOpen>
            <Text>Some content</Text>
          </Popup>
        </NavigationContainer>,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should call the onOpen the popup is opened', () => {
    const onOpen = jest.fn();

    render(
      <NavigationContainer>
        <Popup isOpen onOpen={onOpen}>
          <Text>Some content</Text>
        </Popup>
      </NavigationContainer>,
    );

    expect(onOpen).toBeCalledTimes(1);
  });

  it('should call the onClose the popup is closed', () => {
    const onClose = jest.fn();

    render(
      <NavigationContainer>
        <Popup isOpen={false} onClose={onClose}>
          <Text>Some content</Text>
        </Popup>
      </NavigationContainer>,
    );

    expect(onClose).toBeCalledTimes(1);
  });
});
