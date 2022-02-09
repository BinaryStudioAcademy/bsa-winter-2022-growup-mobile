import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider as PaperProvider } from 'react-native-paper';
import SplashScreen from 'react-native-splash-screen';
import { Provider as StoreProvider } from 'react-redux';

import { store } from 'src/store';
import RootNavigation from 'src/navigation';
<<<<<<< HEAD
import theme from 'src/styles/theme';
=======
import theme from 'src/styles/theme/theme';
>>>>>>> dcb3643 (feat: app theme added)

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
<<<<<<< HEAD
    <StoreProvider store={store}>
      <PaperProvider theme={theme}>
        <NavigationContainer>
          <RootNavigation />
        </NavigationContainer>
      </PaperProvider>
    </StoreProvider>
=======
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <RootNavigation />
      </NavigationContainer>
    </PaperProvider>
>>>>>>> dcb3643 (feat: app theme added)
  );
};

export default App;
