import {fireEvent, render} from '@testing-library/react-native';
import React from 'react';
import {Image} from 'react-native';
import renderer from 'react-test-renderer';

import {ICONS} from '../../../utils/constants/Icons';

import {PasswordInput} from './PasswordInput';

describe('PasswordInput Component', () => {
  const props: any = {placeholder: 'password'};

  it('should render correctly with the password hidden by default', () => {
    const tree = renderer.create(<PasswordInput {...props} />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should toggle the password when clicking the icon', () => {
    const instance = render(<PasswordInput {...props} />);

    const PasswordIconContainer = instance.getByTestId('passwordIcon');
    const Icon = PasswordIconContainer.findByType(Image);

    fireEvent(PasswordIconContainer, 'press');
    expect(Icon.props).toHaveProperty('source', ICONS.closedEye);

    fireEvent(PasswordIconContainer, 'press');
    expect(Icon.props).toHaveProperty('source', ICONS.openEye);
  });
});
