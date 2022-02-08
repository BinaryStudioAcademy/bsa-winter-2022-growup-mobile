import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import { Provider } from 'react-redux';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useAppSelector, useAppDispatch } from '../../hooks/hooks';
import { store } from '../../store/store';

const LoginScreen = () => {
  return (
    <Provider store={store}>
      <SafeAreaView>
        <Text>Login screen</Text>
      </SafeAreaView>
    </Provider>
  );
};

export default LoginScreen;
