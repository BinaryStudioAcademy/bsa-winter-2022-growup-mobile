import React, { useMemo } from 'react';
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

const AppNavigation: React.FC = () => {
  const { user } = useAppSelector(state => state.auth);

  const isCompletedOnboarding = user?.firstName;
  const isUserAdmin = user?.role === UserRoleType.ADMIN;

  const initialRouteName = useMemo(() => {
    if (isUserAdmin) {
      return AppRoute.ADMIN_HOME;
    }
    if (isCompletedOnboarding) {
      return AppRoute.APP_TABS;
    }
    return AppRoute.ONBOARDING_SETUP;
  }, [isUserAdmin, isCompletedOnboarding]);

  return (
    <Stack.Navigator
      initialRouteName={initialRouteName}
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
          {isCompletedOnboarding ? (
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
          ) : (
            <Stack.Screen
              name={AppRoute.ONBOARDING_SETUP}
              component={OnboardingNavigation}
              options={{ headerShown: false }}
            />
          )}
        </>
      )}
    </Stack.Navigator>
  );
};

export default AppNavigation;
