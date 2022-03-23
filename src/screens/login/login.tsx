import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Image } from 'react-native';

import { AuthRoute, ButtonMode } from 'src/common/enums';
import { MainButton, Text } from 'src/components';
import { useAppNavigation } from 'src/hooks';
import { LoginForm } from './components';
import useStyles from './styles';

const LoginScreen: React.FC = () => {
  const styles = useStyles();

  const navigation = useAppNavigation();

  const handleSignUpPress = () => {
    navigation.navigate(AuthRoute.SIGN_UP);
  };

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.content}>
        <Image
          source={require('src/assets/images/Logo.png')}
          style={styles.logo}
        />
        <LoginForm />
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
