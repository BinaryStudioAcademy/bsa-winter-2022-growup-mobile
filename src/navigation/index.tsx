import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { AppRoute } from '../common/enums/navigation';
import HomeScreen from '../screens/Home';

const RootStack = createNativeStackNavigator();

const defaultScreenOptions = {
  headerShown: false,
};

const RootNavigation = () => {
  return (
    <RootStack.Navigator screenOptions={defaultScreenOptions}>
      <RootStack.Screen name={AppRoute.HOME} component={HomeScreen} />
    </RootStack.Navigator>
  );
};

export default RootNavigation;
