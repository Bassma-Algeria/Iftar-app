import React from 'react';
import {render} from '@testing-library/react-native';
import {Profile} from './Profile';

describe('HomeStack -> Profile Screen', () => {
  it('should render correctly', () => {
    let props: any = {};
    const instance = render(<Profile {...props} />);

    expect(instance.toJSON()).toMatchSnapshot();
  });
});
