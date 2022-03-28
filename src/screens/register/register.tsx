import React from 'react';

import { AuthScreen } from 'src/components';
import { AuthRoute } from 'src/common/enums';
import { RegisterForm } from './components';

const RegisterScreen: React.FC = () => {
  return (
    <AuthScreen
      secondaryMessage="Already have an account?"
      secondaryButtonTitle="Sign In"
      navigateScreen={AuthRoute.SIGN_IN}
    >
      <RegisterForm />
    </AuthScreen>
  );
};

export default RegisterScreen;
