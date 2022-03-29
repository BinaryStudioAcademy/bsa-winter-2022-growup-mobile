import React from 'react';

import { AuthRoute } from 'src/common/enums';
import { AuthScreen } from 'src/components';
import { LoginForm } from './components';

const LoginScreen: React.FC = () => {
  return (
    <AuthScreen
      secondaryMessage="New to GrowUp?"
      secondaryButtonTitle="Sign Up"
      navigateScreen={AuthRoute.SIGN_UP}
    >
      <LoginForm />
    </AuthScreen>
  );
};

export default LoginScreen;
