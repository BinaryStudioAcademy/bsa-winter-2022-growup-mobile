import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider as PaperProvider } from 'react-native-paper';

import RootNavigation from './navigation';

const App = () => {
  return (
    <PaperProvider>
      <NavigationContainer>
        <RootNavigation />
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
