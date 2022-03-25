import React from 'react';

import {
  LinkingOptions,
  NavigationContainer as NativeContainer,
} from '@react-navigation/native';

import { AuthRoute } from 'src/common/enums';

const linking: LinkingOptions<ReactNavigation.RootParamList> = {
  prefixes: ['growupmobile://', 'https://bsa-growup.herokuapp.com'],
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
