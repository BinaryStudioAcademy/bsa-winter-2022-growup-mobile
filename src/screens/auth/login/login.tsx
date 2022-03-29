import React from 'react';
import { Image, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { AuthRoute, ButtonMode } from 'src/common/enums';
import { MainButton, Text } from 'src/components';
import { useAppNavigation, useAsset } from 'src/hooks';
import { LoginForm } from './components';
import useStyles from './styles';

const LoginScreen: React.FC = () => {
  const styles = useStyles();
  const logo = useAsset('images/Logo');

  const navigation = useAppNavigation();

  const handleSignUpPress = () => {
    navigation.navigate(AuthRoute.SIGN_UP);
  };

  const handleCompleteRegistrationPress = () => {
    navigation.navigate(AuthRoute.COMPLETE_REGISTRATION);
  };

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.content}>
        <Image source={logo} style={styles.logo} />
        <LoginForm />
      </View>
      <View style={styles.footer}>
        <Text>New to GrowUp?</Text>
        <MainButton mode={ButtonMode.TEXT} onPress={handleSignUpPress}>
          Sign Up
        </MainButton>
        <MainButton
          mode={ButtonMode.TEXT}
          onPress={handleCompleteRegistrationPress}
        >
          Complete Registration
        </MainButton>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
