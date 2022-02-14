import React from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';

import { OnboardingRoute } from 'src/common/enums/navigation';
import {
  AddEducationScreen,
  AddExperienceScreen,
  HomeScreen,
  OnboardingScreen,
} from 'src/screens';

const Stack = createNativeStackNavigator();

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
      <Stack.Screen
        name={OnboardingRoute.ADD_EXPERIENCE}
        component={AddExperienceScreen}
      />
      <Stack.Screen
        name={OnboardingRoute.ADD_EDUCATION}
        component={AddEducationScreen}
      />
      <Stack.Screen
        name={OnboardingRoute.ADD_LANGUAGE}
        component={HomeScreen}
      />
      <Stack.Screen
        name={OnboardingRoute.ADD_LOCATION}
        component={HomeScreen}
      />
    </Stack.Navigator>
  );
};

export default OnboardingNavigation;
