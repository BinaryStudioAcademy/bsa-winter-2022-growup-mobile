import React from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';

import { OKRRoute } from 'src/common/enums/navigation';
import { AddKeyResultScreen, AddOKRScreen, OKRScreen } from 'src/screens';
import { OKRStackParamList } from 'src/common/types';

const Stack = createNativeStackNavigator<OKRStackParamList>();

const screenOptions: NativeStackNavigationOptions = {
  headerTitleAlign: 'center',
  headerTitleStyle: {
    fontFamily: 'NunitoSans-SemiBold',
  },
};

const OKRNavigation = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name={OKRRoute.OKR} component={OKRScreen} />
      <Stack.Screen
        name={OKRRoute.ADD_OKR}
        component={AddOKRScreen}
        options={{ title: 'Add New Objective' }}
      />
      <Stack.Screen
        name={OKRRoute.ADD_KEY_RESULT}
        component={AddKeyResultScreen}
        options={{ title: 'Add Key Result' }}
      />
    </Stack.Navigator>
  );
};

export default OKRNavigation;
