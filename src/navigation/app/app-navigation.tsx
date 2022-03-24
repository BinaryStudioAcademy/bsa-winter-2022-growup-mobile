import React from 'react';

import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';

import {
  AddKeyResultScreen,
  AddOKRScreen,
  OpportunityDetailsScreen,
} from 'src/screens';

import { AppRoute } from 'src/common/enums';
import { AppStackParamList } from 'src/common/types';
import { AppTabsNavigation } from '../app-tabs';
import { OnboardingNavigation } from '../onboarding';

const Stack = createNativeStackNavigator<AppStackParamList>();

const screenOptions: NativeStackNavigationOptions = {
  headerTitleAlign: 'center',
  headerTitleStyle: {
    fontFamily: 'NunitoSans-SemiBold',
  },
};

const AppNavigation: React.FC = () => {
  //TODO add check for initial route when Onboarding is needed
  return (
    <Stack.Navigator
      initialRouteName={AppRoute.APP_TABS}
      screenOptions={screenOptions}
    >
      <Stack.Screen
        name={AppRoute.APP_TABS}
        component={AppTabsNavigation}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={AppRoute.ADD_OKR}
        component={AddOKRScreen}
        options={{ title: 'Add New Objective' }}
      />
      <Stack.Screen
        name={AppRoute.ADD_KEY_RESULT}
        component={AddKeyResultScreen}
        options={{ title: 'Add Key Result' }}
      />
      <Stack.Screen
        name={AppRoute.ONBOARDING_SETUP}
        component={OnboardingNavigation}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={AppRoute.OPPORTUNITY_DETAILS}
        component={OpportunityDetailsScreen}
        options={{ title: 'Opportunity details' }}
      />
    </Stack.Navigator>
  );
};

export default AppNavigation;
