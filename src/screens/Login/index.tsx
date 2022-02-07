import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import { Provider } from 'react-redux';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { store } from '../../store/store';

const LoginScreen = () => {
  const dispatch = useAppDispatch();
  const isLogged = useAppSelector((state) => state.user.isLogged);

  return (
    <Provider store={store}>
      <SafeAreaView>
        {isLogged ? (
            <Text>isLogged!</Text>
        ) : (
            <Text>not Logged!</Text>
        )}
      </SafeAreaView>
    </Provider>
  );
};  

export default LoginScreen;
