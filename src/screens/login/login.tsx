import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Image, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { LoginForm } from 'src/screens/login/components';
import { styles } from './styles';
import { AuthRoute, ButtonMode } from 'src/common/enums';
import { MainButton } from 'src/components';

type ILoginScreenProps = Record<string, never>;

const LoginScreen: React.FC<ILoginScreenProps> = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.content}>
      <View style={styles.content}>
        <Image
          source={require('src/assets/images/Logo.png')}
          style={styles.logo}
        />
        <LoginForm />
      </View>

      <View style={styles.footer}>
        <Text>New to GrowUp?</Text>
        <MainButton
          mode={ButtonMode.TEXT}
          onPress={() => navigation.navigate(AuthRoute.SIGN_UP)}
        >
          Sign Up
        </MainButton>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
