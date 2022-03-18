import 'react-native';
import React from 'react';
import rendered from 'react-test-renderer';
import {TouchableOpacity} from 'react-native';
import {fireEvent, render} from '@testing-library/react-native';

import {Button} from './Button';

describe('Button Component', () => {
  it('should renders correctly', () => {
    const tree = rendered.create(<Button label="click" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should have custom styles when adding the style props', () => {
    const tree = rendered
      .create(<Button label="click" style={{backgroundColor: '#fff'}} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should run the function passed in the props when pressed', () => {
    const mockFunction = jest.fn();
    const instance = render(<Button onPress={mockFunction} label="click" />);

    fireEvent(instance.UNSAFE_getByType(TouchableOpacity), 'onPress');

    expect(mockFunction).toBeCalledTimes(1);
  });
});
