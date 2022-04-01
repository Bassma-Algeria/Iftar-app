import {createState, useState} from '@hookstate/core';

import type {LocationCords} from '../../../@types/LocationCords';

export type OnConfirmArgs = {coordinates: LocationCords; name: string};
type OnConfirmFunction = (selectedLocation: OnConfirmArgs) => void;

interface ChooseLocationState {
  selectedLocation?: LocationCords;
  onConfirm?: OnConfirmFunction;
}

const state = createState<ChooseLocationState>({selectedLocation: undefined, onConfirm: undefined});

const useChoosingLocationState = () => {
  return useState(state);
};

export {useChoosingLocationState};
