import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider as PaperProvider } from 'react-native-paper';
import SplashScreen from 'react-native-splash-screen';

<<<<<<< HEAD
import RootNavigation from 'src/navigation';
import theme from 'src/styles/theme/theme';
=======
import RootNavigation from './navigation';
import theme from './styles/theme/theme';
>>>>>>> 20a6df88ec11230614cf752232cfdb315bf9c680

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
