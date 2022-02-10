import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { AppRoute, AuthRoute } from 'src/common/enums/navigation';
import HomeScreen from 'src/screens/home';
import AppNavigation from './app/app-navigation';

const RootStack = createNativeStackNavigator();

const defaultScreenOptions = {
  headerShown: false,
};

const RootNavigation = () => {
  // TODO add check if user logged in
  const isAuthorized = true;

  return (
    <RootStack.Navigator screenOptions={defaultScreenOptions}>
      {isAuthorized ? (
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
