import React from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';

import { AppRoute } from 'src/common/enums/navigation';
import { AddKeyResultScreen, AddOKRScreen, QuizScreen } from 'src/screens';
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

const AppNavigation = () => {
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
      <Stack.Screen name={AppRoute.QUIZ} component={QuizScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigation;
