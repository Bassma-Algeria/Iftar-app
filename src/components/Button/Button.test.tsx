import 'react-native';
import React from 'react';
import rendered from 'react-test-renderer';
import {TouchableOpacity} from 'react-native';
import {fireEvent, render} from '@testing-library/react-native';

import {Button} from './Button';
import {ICONS} from '../../utils/constants/Icons';

describe('Button Component', () => {
  it('should renders correctly', () => {
    const tree = rendered.create(<Button>click</Button>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should have custom styles when adding the style props', () => {
    const tree = rendered.create(<Button style={{backgroundColor: '#fff'}}>click</Button>).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should show the icon when passing the icon prop', () => {
    const tree = rendered.create(<Button icon={ICONS.location}>click</Button>).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should run the function passed in the props when pressed', () => {
    const mockFunction = jest.fn();
    const instance = render(<Button onPress={mockFunction}>Click</Button>);

    fireEvent(instance.UNSAFE_getByType(TouchableOpacity), 'onPress');

    expect(mockFunction).toBeCalledTimes(1);
  });

  it('should be able to make the button inactive and not run the onPress function in that case', () => {
    const mockFunction = jest.fn();
    const instance = render(
      <Button inactive onPress={mockFunction}>
        Click
      </Button>,
    );

    fireEvent(instance.UNSAFE_getByType(TouchableOpacity), 'onPress');

    expect(mockFunction).toBeCalledTimes(0);
    expect(instance.toJSON()).toMatchSnapshot();
  });
});