import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider as PaperProvider } from 'react-native-paper';
import SplashScreen from 'react-native-splash-screen';
import { Provider as StoreProvider } from 'react-redux';
import { en, registerTranslation } from 'react-native-paper-dates';

import { store } from 'src/store';
import RootNavigation from 'src/navigation';
import theme from 'src/styles/theme';

import { pushNotificationApi } from 'src/services';

pushNotificationApi.pushNotification;

registerTranslation('en', en);

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <StoreProvider store={store}>
      <PaperProvider theme={theme}>
        <NavigationContainer>
          <RootNavigation />
        </NavigationContainer>
      </PaperProvider>
    </StoreProvider>
  );
};

export default App;
