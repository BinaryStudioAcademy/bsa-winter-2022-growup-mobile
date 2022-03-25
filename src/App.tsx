import React, { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
import { Provider as StoreProvider } from 'react-redux';
import { en, registerTranslation } from 'react-native-paper-dates';
import Toast from 'react-native-toast-message';

import { store } from 'src/store';
import RootNavigation from 'src/navigation';
import { ThemeProvider } from 'src/blocs/theme-bloc';
import { pushNotificationApi } from 'src/services';
import { PaperProvider } from 'src/components';
import { NavigationContainer } from 'src/navigation/navigation-container';

pushNotificationApi.init();
registerTranslation('en', en);

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <>
      <StoreProvider store={store}>
        <ThemeProvider>
          <PaperProvider>
            <NavigationContainer>
              <RootNavigation />
            </NavigationContainer>
          </PaperProvider>
        </ThemeProvider>
      </StoreProvider>
      <Toast />
    </>
  );
};

export default App;
