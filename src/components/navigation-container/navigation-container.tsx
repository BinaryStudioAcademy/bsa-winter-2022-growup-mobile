import React from 'react';

import {
  LinkingOptions,
  NavigationContainer as NativeContainer,
} from '@react-navigation/native';

import { AuthRoute } from 'src/common/enums';
import { API_ORIGIN_URL, DEEP_LINKING_SCHEME } from 'src/common/constants';

const linking: LinkingOptions<ReactNavigation.RootParamList> = {
  prefixes: [DEEP_LINKING_SCHEME, API_ORIGIN_URL],
  config: {
    screens: {
      [AuthRoute.COMPLETE_REGISTRATION]: 'complete-registration/:token',
    },
  },
};

const NavigationContainer: React.FC = ({ children }) => {
  return <NativeContainer linking={linking}>{children}</NativeContainer>;
};

export default NavigationContainer;
