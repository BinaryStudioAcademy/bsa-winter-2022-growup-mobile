import React, { useMemo } from 'react';
import { RouteProp, useRoute } from '@react-navigation/native';

import { Text } from 'src/components';

type NavigationParams = {
  token: string;
};

type Route = RouteProp<{ params?: NavigationParams }>;

const CompleteRegistration: React.FC = () => {
  const { params } = useRoute<Route>();
  const token = useMemo(() => params?.token, [params]);

  return <Text>CompleteRegistration screen with token {token}!</Text>;
};

export default CompleteRegistration;
