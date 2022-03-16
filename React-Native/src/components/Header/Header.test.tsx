import 'react-native';
import React from 'react';
import rendered from 'react-test-renderer';
import {Text} from 'react-native';
import {fireEvent, render} from '@testing-library/react-native';

import {Header} from './Header';

describe('Header Component', () => {
  it('should renders correctly with the default styles', () => {
    const tree = rendered.create(<Header>Hello</Header>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should be able to change the color', () => {
    const tree = rendered.create(<Header color="black">Hello</Header>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should have mutiple variant and change the size depend on the variant', () => {
    const tree = rendered.create(<Header variant="h2">Hello</Header>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should be able to change the font weight', () => {
    const tree = rendered
      .create(<Header fontWeight="extraBold">Hello</Header>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should be able to change add custom styles', () => {
    const tree = rendered
      .create(<Header style={{backgroundColor: '#000'}}>Hello</Header>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should run the function passed in the props when pressed', () => {
    const mockFunction = jest.fn();
    const instance = render(<Header onPress={mockFunction}>Click</Header>);

    fireEvent(instance.UNSAFE_getByType(Text), 'onPress');

    expect(mockFunction).toBeCalledTimes(1);
  });
});
