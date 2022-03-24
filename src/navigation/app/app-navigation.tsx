import React from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';

import { AppRoute } from 'src/common/enums/navigation';
import { AddKeyResultScreen, AddOKRScreen, AdminHomeScreen } from 'src/screens';
import { AppStackParamList } from 'src/common/types';
import { AppTabsNavigation } from '../app-tabs';
import { OnboardingNavigation } from '../onboarding';
import { useAppSelector } from 'src/hooks';
import { UserRoleType } from 'src/common/enums';

const Stack = createNativeStackNavigator<AppStackParamList>();

const screenOptions: NativeStackNavigationOptions = {
  headerTitleAlign: 'center',
  headerTitleStyle: {
    fontFamily: 'NunitoSans-SemiBold',
  },
};

const AppNavigation = () => {
  const { user } = useAppSelector(state => state.auth);

  const isUserAdmin = user?.roleType === UserRoleType.Admin;

  //TODO add check for initial route when Onboarding is needed
  return (
    <Stack.Navigator
      initialRouteName={isUserAdmin ? AppRoute.ADMIN_HOME : AppRoute.APP_TABS}
      screenOptions={screenOptions}
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
        </>
      )}
    </Stack.Navigator>
  );
};

export default AppNavigation;
