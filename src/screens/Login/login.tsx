import React from 'react';
import { SafeAreaView } from 'react-native';

import { LoginFormComponent } from 'src/screens/Login/Components';

const LoginScreen = () => {
  return (
    <SafeAreaView>
      <LoginFormComponent />
    </SafeAreaView>
  );
};

export { LoginScreen };
