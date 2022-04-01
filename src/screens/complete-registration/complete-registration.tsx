import React, { useMemo } from 'react';
import { RouteProp, useRoute } from '@react-navigation/native';

import { AuthScreen } from 'src/components';
import { CompleteRegistrationForm } from './components';
import { AuthRoute } from 'src/common/enums';

type NavigationParams = {
  token: string;
};

type Route = RouteProp<{ params?: NavigationParams }>;

const CompleteRegistrationScreen: React.FC = () => {
  const { params } = useRoute<Route>();
  const token = useMemo(() => params?.token, [params]);

  return (
    <AuthScreen
      secondaryMessage="Already have an account?"
      secondaryButtonTitle="Sign In"
      navigateScreen={AuthRoute.SIGN_IN}
    >
      <CompleteRegistrationForm accessToken={token} />
    </AuthScreen>
  );
};

export default CompleteRegistrationScreen;
