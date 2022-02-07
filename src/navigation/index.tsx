import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { AppRoute, AuthRoute } from '../common/enums/navigation';
import HomeScreen from '../screens/Home';
import AppNavigation from './app/app-navigation';

const RootStack = createNativeStackNavigator();

const defaultScreenOptions = {
  headerShown: false,
};

const RootNavigation = () => {
  // TODO add check if user logged in
  const currentUser = true;

  return (
    <RootStack.Navigator screenOptions={defaultScreenOptions}>
      {currentUser ? (
        <RootStack.Screen name={AppRoute.APP} component={AppNavigation} />
      ) : (
        <>
          <RootStack.Screen name={AuthRoute.SIGN_IN} component={HomeScreen} />
          <RootStack.Screen name={AuthRoute.SIGN_UP} component={HomeScreen} />
        </>
      )}
    </RootStack.Navigator>
  );
};

export default RootNavigation;
