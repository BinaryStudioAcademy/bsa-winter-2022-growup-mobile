import React from 'react';
import { Provider } from 'react-native-paper';

import usePaperTheme from 'src/styles/theme';

const PaperProvider: React.FC = ({ children }) => {
  const paperTheme = usePaperTheme();
  return <Provider theme={paperTheme}>{children}</Provider>;
};

export default PaperProvider;
