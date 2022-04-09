import React from 'react';

import {styles} from '../Profile.style';

import {ICONS} from '../../../../../utils/constants/Icons';

import {Header} from '../../../../../components/Header/Header';
import {ProfileItem} from './shared/ProfileItem';

const Settings = () => {
  return <ProfileItem title="إعدادات" icon={ICONS.settings} Details={Details} />;
};

const Details: React.FC<{isExpanded: boolean}> = () => {
  return <Header>Hello</Header>;
};

export {Settings};
