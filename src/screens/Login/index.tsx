import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import { Provider } from 'react-redux';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useAppSelector, useAppDispatch } from '../../hooks/hooks';

const LoginScreen = () => {
  return (
    <SafeAreaView>
      <Text>Login screen</Text>
    </SafeAreaView>
  );
};

export default LoginScreen;
