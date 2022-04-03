import React from 'react';
import renderer from 'react-test-renderer';
import {fireEvent, render} from '@testing-library/react-native';

import {ICONS} from '../../../utils/constants/Icons';

import {Input} from './Input';
import {TextInput} from 'react-native';

describe('Input component', () => {
  const props: any = {placeholder: 'Email', icon: ICONS.email};

  it('should render correctly, with the icon in the left by default', () => {
    const tree = renderer.create(<Input {...props} />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should be able to change the default style', () => {
    const tree = renderer.create(<Input {...props} style={{margin: 40}} />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should show the error text when there is an error passed in the props', () => {
    const tree = renderer
      .create(<Input {...props} style={{margin: 40}} error={'someError'} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should be able to change the background and placholder color of the input', () => {
    const tree = renderer
      .create(<Input {...props} backgroundColor="beige" placeholderColor="black" />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should call onTextChange each time the input value changed', () => {
    const onTextChange = jest.fn();

    const instance = render(<Input {...props} onTextChange={onTextChange} />);
    const TargetInput = instance.UNSAFE_getByType(TextInput);

    fireEvent(TargetInput, 'changeText', 's');

    expect(onTextChange).toBeCalledTimes(1);
    expect(onTextChange).toBeCalledWith('s');

    fireEvent(TargetInput, 'changeText', 'sa');
    fireEvent(TargetInput, 'changeText', 'sari');
    fireEvent(TargetInput, 'changeText', 'sarili');

    expect(onTextChange).toBeCalledTimes(4);
    expect(onTextChange).toBeCalledWith('sarili');
  });
});
