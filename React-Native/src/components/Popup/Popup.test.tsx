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
          <Popup isOpen={false} setIsOpen={() => {}}>
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
          <Popup isOpen setIsOpen={() => {}}>
            <Text>Some content</Text>
          </Popup>
        </NavigationContainer>,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should call the onAuthClose the popup is auto closed', () => {
    const onClose = jest.fn();

    render(
      <NavigationContainer>
        <Popup isOpen={false} setIsOpen={() => {}} onAutoClose={onClose}>
          <Text>Some content</Text>
        </Popup>
      </NavigationContainer>,
    );

    expect(onClose).toBeCalledTimes(1);
  });

  it('should be able to change the background color', () => {
    const tree = render(
      <NavigationContainer>
        <Popup isOpen setIsOpen={() => {}} backgroundColor="black">
          <Text>Some content</Text>
        </Popup>
      </NavigationContainer>,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
