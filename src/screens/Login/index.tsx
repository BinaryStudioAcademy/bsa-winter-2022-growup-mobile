import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useAppDispatch } from 'src/hooks';
import { useAppSelector } from 'src/hooks';

const LoginScreen = () => {
  const dispatch = useAppDispatch();
  const isAuthorized = useAppSelector(state => state.auth.isAuthorized);

  return (
    <SafeAreaView>
      <Text>Login screen</Text>
    </SafeAreaView>
  );
};

export default LoginScreen;
