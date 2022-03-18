import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import {Loader} from './Loader';

describe('Loader Component', () => {
  it('should render correctly with the default style', () => {
    const tree = renderer.create(<Loader />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should be able to change the color', () => {
    const tree = renderer.create(<Loader color="brown" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should be able to change the size', () => {
    const tree = renderer.create(<Loader size={60} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should be able to add custom styles', () => {
    const tree = renderer.create(<Loader style={{margin: 50}} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
