import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {
  AddKeyResultScreen,
  AddOKRScreen,
  QuizScreen,
  OpportunityDetailsScreen,
  AdminHomeScreen,
} from 'src/screens';

import { AppRoute, UserRoleType } from 'src/common/enums';
import { AppStackParamList } from 'src/common/types';
import { useAppSelector, useStackScreenOptions } from 'src/hooks';
import { AppTabsNavigation } from '../app-tabs';
import { OnboardingNavigation } from '../onboarding';

const Stack = createNativeStackNavigator<AppStackParamList>();

const AppNavigation = () => {
  const { user } = useAppSelector(state => state.auth);

  const isUserAdmin = user?.role === UserRoleType.ADMIN;

  //TODO add check for initial route when Onboarding is needed
  return (
    <Stack.Navigator
      initialRouteName={isUserAdmin ? AppRoute.ADMIN_HOME : AppRoute.APP_TABS}
      screenOptions={useStackScreenOptions()}
    >
      {isUserAdmin ? (
        <Stack.Screen
          name={AppRoute.ADMIN_HOME}
          component={AdminHomeScreen}
          options={{ headerShown: false }}
        />
      ) : (
        <>
          <Stack.Screen
            name={AppRoute.APP_TABS}
            component={AppTabsNavigation}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name={AppRoute.ADD_OKR}
            component={AddOKRScreen}
            options={{
              title: 'Add New Objective',
            }}
          />
          <Stack.Screen
            name={AppRoute.ADD_KEY_RESULT}
            component={AddKeyResultScreen}
            options={{
              title: 'Add Key Result',
            }}
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
          <Stack.Screen
            name={AppRoute.QUIZ}
            component={QuizScreen}
            options={{ title: 'Quiz' }}
          />
        </>
      )}
    </Stack.Navigator>
  );
};

export default AppNavigation;
