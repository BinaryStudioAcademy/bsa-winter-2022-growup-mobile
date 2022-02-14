import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { OnboardingRoute } from 'src/common/enums/navigation';
import { HomeScreen, OnboardingScreen } from 'src/screens';

const Stack = createNativeStackNavigator();

const OnboardingNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={OnboardingRoute.ONBOARDING}
        component={OnboardingScreen}
      />
      <Stack.Screen
        name={OnboardingRoute.ADD_EXPERIENCE}
        component={HomeScreen}
      />
      <Stack.Screen
        name={OnboardingRoute.ADD_EDUCATION}
        component={HomeScreen}
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
