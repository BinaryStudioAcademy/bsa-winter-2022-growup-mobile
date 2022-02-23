import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Image, Text } from 'react-native';

import { LoginForm } from 'src/screens/login/components';
import { AuthRoute, ButtonMode } from 'src/common/enums';
import { MainButton } from 'src/components';
import { styles } from './styles';
import { useAppNavigation } from 'src/hooks';

const LoginScreen: React.FC = () => {
  const navigation = useAppNavigation();

  const handleSignUpPress = () => {
    navigation.navigate(AuthRoute.SIGN_UP);
  };

  return (
    <SafeAreaView style={styles.content}>
      <View style={styles.container}>
        <Image
          source={require('src/assets/images/Logo.png')}
          style={styles.logo}
        />
        <LoginForm />
      </View>

      <View style={styles.footer}>
        <Text>New to GrowUp?</Text>
        <MainButton mode={ButtonMode.TEXT} onPress={() => handleSignUpPress}>
          Sign Up
        </MainButton>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
