import React, { useCallback, useState } from 'react';
import { Appearance } from 'react-native';

import { ThemeMode } from 'src/common/enums';
import { Theme, ThemeContext } from './context';

const colorSchemeToThemeMode: Record<string, ThemeMode> = {
  light: ThemeMode.Light,
  dark: ThemeMode.Dark,
  null: ThemeMode.Light,
  undefined: ThemeMode.Light,
};

const ThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(() => {
    const colorScheme = Appearance.getColorScheme();

    return {
      mode: colorSchemeToThemeMode[String(colorScheme)],
    };
  });

  const set = useCallback(
    (value: Partial<Theme>) => {
      setTheme({
        ...theme,
        ...value,
      });
    },
    [theme]
  );

  return (
    <ThemeContext.Provider value={{ ...theme, set }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider };
