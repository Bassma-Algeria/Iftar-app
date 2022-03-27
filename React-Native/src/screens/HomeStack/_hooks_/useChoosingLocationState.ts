import {createState, useState} from '@hookstate/core';

import type {LocationCords} from '../../../@types/LocationCords';

type OnConfirmFunction = (selectedLocation: LocationCords) => void;

interface ChooseLocationState {
  selectedLocation?: LocationCords;
  onConfirm?: OnConfirmFunction;
}

const state = createState<ChooseLocationState>({selectedLocation: undefined, onConfirm: undefined});

const useChoosingLocationState = () => {
  return useState(state);
};

export {useChoosingLocationState};
