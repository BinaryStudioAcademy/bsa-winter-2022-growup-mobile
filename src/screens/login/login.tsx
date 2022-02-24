import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Image, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { AuthRoute, ButtonMode } from 'src/common/enums';
import { MainButton } from 'src/components';
import { LoginForm } from './components';
import { styles } from './styles';
import { useAppDispatch } from 'src/hooks';
import { authActions } from 'src/store/actions';
import { ISignInPayload } from 'src/common/types';

const LoginScreen: React.FC = () => {
  const navigation = useNavigation();
  const dispatch = useAppDispatch();

  const handleLogin = (data: ISignInPayload) => {
    dispatch(authActions.signIn(data));
  };

  const handleFingerprint = (email: string) => {
    dispatch(authActions.signInFingerprint({ email }));
  };

  const handleSignUpPress = () => {
    navigation.navigate({
      name: AuthRoute.SIGN_UP as never,
      params: {} as never,
    });
  };

  return (
    <SafeAreaView style={styles.content}>
      <View style={styles.container}>
        <Image
          source={require('src/assets/images/Logo.png')}
          style={styles.logo}
        />
        <LoginForm
          onSubmit={handleLogin}
          onSubmitFingerprint={handleFingerprint}
        />
      </View>
      <View style={styles.footer}>
        <Text>New to GrowUp?</Text>
        <MainButton mode={ButtonMode.TEXT} onPress={handleSignUpPress}>
          Sign Up
        </MainButton>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
