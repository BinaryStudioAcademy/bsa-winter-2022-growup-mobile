import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { AppRoute, AuthRoute } from 'src/common/enums/navigation';
import { useAppSelector } from 'src/hooks';
import { MenteeHomeScreen } from 'src/screens';
import { RootStackParamList } from 'src/common/types';
import { AppNavigation } from './app';

const RootStack = createNativeStackNavigator<RootStackParamList>();

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
          <RootStack.Screen
            name={AuthRoute.SIGN_IN}
            component={MenteeHomeScreen}
          />
          <RootStack.Screen
            name={AuthRoute.SIGN_UP}
            component={MenteeHomeScreen}
          />
        </>
      )}
    </RootStack.Navigator>
  );
};

export default RootNavigation;
