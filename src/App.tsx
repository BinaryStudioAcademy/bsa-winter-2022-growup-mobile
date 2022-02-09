import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider as PaperProvider } from 'react-native-paper';
import SplashScreen from 'react-native-splash-screen';

import RootNavigation from 'src/navigation';
import theme from 'src/styles/theme/theme';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <RootNavigation />
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
