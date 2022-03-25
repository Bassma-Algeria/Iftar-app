import 'react-native';
import React from 'react';
import {act, fireEvent, render} from '@testing-library/react-native';
import {TextInput} from 'react-native';

import {restuarantsGateway} from '../../../../Gateways';
import {RESTAURANTS} from '../../../../Gateways/RestaurantsGateway/Fake/RESTAURANTS';

import {Search} from './Search';
import {NavigationContainer} from '@react-navigation/native';

describe('HomeStack -> Search Screen', () => {
  const props: any = {};

  const SearchScreen = () => (
    <NavigationContainer>
      <Search {...props} />
    </NavigationContainer>
  );

  it('should renders correctly by default with the keyboard open', () => {
    const instance = render(<SearchScreen />);

    expect(instance.toJSON()).toMatchSnapshot();
  });

  it('should show a list of restaurants when searching', async () => {
    jest
      .spyOn(restuarantsGateway, 'searchFor')
      .mockImplementation(() => Promise.resolve(RESTAURANTS));

    const instance = render(<SearchScreen />);
    const input = instance.UNSAFE_getByType(TextInput);

    await act(async () => {
      await fireEvent(input, 'changeText', 'restaurant');
    });

    expect(instance.toJSON()).toMatchSnapshot();
  });

  it('should show a not found message when nothing returned from the search', async () => {
    jest.spyOn(restuarantsGateway, 'searchFor').mockImplementation(() => Promise.resolve([]));

    const instance = render(<SearchScreen />);
    const input = instance.UNSAFE_getByType(TextInput);

    await act(async () => {
      fireEvent(input, 'changeText', 'restaurant');
    });

    expect(instance.toJSON()).toMatchSnapshot();
  });
});
