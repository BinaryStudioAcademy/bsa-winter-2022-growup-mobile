import React from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';

import { OnboardingRoute, AppRoute } from 'src/common/enums/navigation';
import {
  AddEducationScreen,
  AddExperienceScreen,
  AddLanguageScreen,
  AddLocationScreen,
  OnboardingScreen,
} from 'src/screens';
import { OnboardingStackParamList } from 'src/common/types';
import AppNavigation from '../app/app-navigation';

const Stack = createNativeStackNavigator<OnboardingStackParamList>();

const addScreenGroupOptions: NativeStackNavigationOptions = {
  presentation: 'modal',
};

const screenOptions: NativeStackNavigationOptions = {
  headerTitleAlign: 'center',
  headerTitleStyle: {
    fontFamily: 'NunitoSans-SemiBold',
  },
};

const OnboardingNavigation = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen
        name={OnboardingRoute.ONBOARDING}
        component={OnboardingScreen}
      />
      <Stack.Group screenOptions={addScreenGroupOptions}>
        <Stack.Screen
          name={OnboardingRoute.ADD_EXPERIENCE}
          component={AddExperienceScreen}
          options={{ title: 'Add Experience' }}
        />
        <Stack.Screen
          name={OnboardingRoute.ADD_EDUCATION}
          component={AddEducationScreen}
          options={{ title: 'Add Education' }}
        />
        <Stack.Screen
          name={OnboardingRoute.ADD_LANGUAGE}
          component={AddLanguageScreen}
          options={{ title: 'Add Language' }}
        />
        <Stack.Screen
          name={OnboardingRoute.ADD_LOCATION}
          component={AddLocationScreen}
          options={{ title: 'Add Location' }}
        />
      </Stack.Group>
      <Stack.Screen
        name={AppRoute.APP}
        component={AppNavigation}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default OnboardingNavigation;