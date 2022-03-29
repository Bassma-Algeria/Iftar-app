import {fireEvent, render} from '@testing-library/react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import renderer from 'react-test-renderer';

import {ICONS} from '../../utils/constants/Icons';

import {IconButton} from './IconButton';

describe('IconButton component', () => {
  const defaultProps = {icon: ICONS.profile};

  it('should render correctly', () => {
    const tree = renderer.create(<IconButton {...defaultProps} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should be able to change the default styles', () => {
    const tree = renderer.create(<IconButton {...defaultProps} style={{margin: 30}} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should be able to change the size of the button', () => {
    const tree = renderer.create(<IconButton size={10} {...defaultProps} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should run the function passed in the props when pressed', () => {
    const mockFunction = jest.fn();
    const instance = render(<IconButton {...defaultProps} onPress={mockFunction} />);

    fireEvent(instance.UNSAFE_getByType(TouchableOpacity), 'onPress');

    expect(mockFunction).toBeCalledTimes(1);
  });
});
