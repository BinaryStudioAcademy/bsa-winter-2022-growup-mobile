import React from 'react';
import { SafeAreaView } from 'react-native';

import { LoginForm } from 'src/screens/Login/components';

type ILoginScreenProps = Record<string, never>;

const LoginScreen: React.FC<ILoginScreenProps> = () => {
  return (
    <SafeAreaView>
      <LoginForm />
    </SafeAreaView>
  );
};

export default LoginScreen;
