import React, { useMemo } from 'react';
import { RouteProp, useRoute } from '@react-navigation/native';

import { AuthScreen } from 'src/components';
import { CompleteRegistrationForm } from './components';

type NavigationParams = {
  token: string;
};

type Route = RouteProp<{ params?: NavigationParams }>;

const CompleteRegistrationScreen: React.FC = () => {
  const { params } = useRoute<Route>();
  const token = useMemo(() => params?.token, [params]);

  return (
    <AuthScreen>
      <CompleteRegistrationForm accessToken={token} />
    </AuthScreen>
  );
};

export default CompleteRegistrationScreen;
