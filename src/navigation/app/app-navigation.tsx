import React from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';

import { AppRoute } from 'src/common/enums/navigation';
import { AddKeyResultScreen, AddOKRScreen } from 'src/screens';
import { AppTabsNavigation } from '../app-tabs';
import { AppStackParamList } from 'src/common/types';

const Stack = createNativeStackNavigator<AppStackParamList>();

const screenOptions: NativeStackNavigationOptions = {
  headerTitleAlign: 'center',
  headerTitleStyle: {
    fontFamily: 'NunitoSans-SemiBold',
  },
};

const AppNavigation = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen
        name={AppRoute.APP_TUBS}
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
    </Stack.Navigator>
  );
};

export default AppNavigation;
