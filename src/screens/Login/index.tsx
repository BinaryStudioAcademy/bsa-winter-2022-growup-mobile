import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useAppSelector, useAppDispatch } from '../../hooks/hooks';

const LoginScreen = () => {
  const dispatch = useAppDispatch();
  const isAuthorized = useAppSelector(state => state.auth.isLogged);

  return (
    <SafeAreaView>
      <Text>Login screen</Text>
    </SafeAreaView>
  );
};

export default LoginScreen;
