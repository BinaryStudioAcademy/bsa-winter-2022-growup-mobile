import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { AppRoute, AuthRoute } from 'src/common/enums/navigation';
import HomeScreen from 'src/screens/home';
import AppNavigation from './app/app-navigation';
import { useAppSelector } from 'src/hooks';

const RootStack = createNativeStackNavigator();

const defaultScreenOptions = {
  headerShown: false,
};

const RootNavigation = () => {
  const { user } = useAppSelector(state => state.auth);

  //TODO add sign in/up screens
  return (
    <RootStack.Navigator screenOptions={defaultScreenOptions}>
      {user ? (
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
