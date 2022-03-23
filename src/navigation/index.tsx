import React, { useEffect } from 'react';
import { View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { AppRoute, AuthRoute } from 'src/common/enums/navigation';
import { useAppDispatch, useAppSelector, useColor } from 'src/hooks';
import { LoginScreen } from 'src/screens';
import { RegisterScreen } from 'src/screens';
import { RootStackParamList } from 'src/common/types';
import { authActions } from 'src/store/actions';
import AppNavigation from './app/app-navigation';

const RootStack = createNativeStackNavigator<RootStackParamList>();

const defaultScreenOptions = {
  headerShown: false,
};

const RootNavigation = () => {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector(state => state.auth);

  useEffect(() => {
    dispatch(authActions.loadCurrentUser());
  }, [dispatch]);

  return (
    <View style={{ backgroundColor: useColor('WHITE') }}>
      <RootStack.Navigator screenOptions={defaultScreenOptions}>
        {user ? (
          <RootStack.Screen name={AppRoute.APP} component={AppNavigation} />
        ) : (
          <>
            <RootStack.Screen
              name={AuthRoute.SIGN_IN}
              component={LoginScreen}
            />
            <RootStack.Screen
              name={AuthRoute.SIGN_UP}
              component={RegisterScreen}
            />
          </>
        )}
      </RootStack.Navigator>
    </View>
  );
};

export default RootNavigation;
