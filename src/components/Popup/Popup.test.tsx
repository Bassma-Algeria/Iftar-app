import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import {fireEvent, render} from '@testing-library/react-native';

import {Popup} from './Popup';
import {Text} from 'react-native';

describe('Popup Component', () => {
  it('should render correclty and closed when isOpen is false', () => {
    const tree = renderer
      .create(
        <Popup isOpen={false} setIsOpen={() => {}}>
          <Text>Some content</Text>
        </Popup>,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should open when isOpen is true', () => {
    const tree = renderer
      .create(
        <Popup isOpen setIsOpen={() => {}}>
          <Text>Some content</Text>
        </Popup>,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should call the onAuthClose the popup is auto closed (when goBack, or clicking the overlay)', () => {
    const onClose = jest.fn();

    const instance = render(
      <Popup isOpen={false} setIsOpen={() => {}} onAutoClose={onClose}>
        <Text>Some content</Text>
      </Popup>,
    );

    fireEvent(instance.getByTestId('overlay'), 'onPress');
    expect(onClose).toBeCalledTimes(1);
  });

  it('should be able to change the background color', () => {
    const tree = render(
      <Popup isOpen setIsOpen={() => {}} backgroundColor="black">
        <Text>Some content</Text>
      </Popup>,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});