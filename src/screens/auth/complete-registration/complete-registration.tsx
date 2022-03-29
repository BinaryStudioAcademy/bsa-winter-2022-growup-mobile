import React, { useMemo } from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RouteProp, useRoute } from '@react-navigation/native';

import { CompleteRegistrationForm } from './components';
import useStyles from './styles';

type NavigationParams = {
  token: string;
};

type Route = RouteProp<{ params?: NavigationParams }>;

const CompleteRegistrationScreen: React.FC = () => {
  const { params } = useRoute<Route>();
  const token = useMemo(() => params?.token, [params]);
  const styles = useStyles();

  return (
    <>
      <SafeAreaView style={styles.screen}>
        <View style={styles.content}>
          <CompleteRegistrationForm accessToken={token} />
        </View>
      </SafeAreaView>
    </>
  );
};

export default CompleteRegistrationScreen;
