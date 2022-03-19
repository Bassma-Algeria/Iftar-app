import React from 'react';
import {Image} from 'react-native';
import {ICONS} from '../../../../utils/constants/Icons.ts';
interface Props {}
const Email: React.FC<Props> = () => {
  return <Image source={ICONS.email} resizeMode="contain" />;
};
const Phone: React.FC<Props> = () => {
  return <Image source={ICONS.phoneLightColor} resizeMode="contain" />;
};
const OpenEye: React.FC<Props> = () => {
  return <Image source={ICONS.openEye} resizeMode="contain" />;
};
const ClosedEye: React.FC<Props> = () => {
  return <Image source={ICONS.closedEye} resizeMode="contain" />;
};
export {Email, Phone, OpenEye, ClosedEye};
