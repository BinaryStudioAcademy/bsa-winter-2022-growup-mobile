import React, { useCallback, useEffect, useState } from 'react';
import { Appearance } from 'react-native';

import { SecureStorageKey, ThemeMode } from 'src/common/enums';
import { secureStorage } from 'src/services';
import { Theme, ThemeContext } from './context';

const colorSchemeToThemeMode: Record<string, ThemeMode> = {
  light: ThemeMode.Light,
  dark: ThemeMode.Dark,
  null: ThemeMode.Light,
  undefined: ThemeMode.Light,
};

const ThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState<Theme | null>(null);

  const set = useCallback(
    (value: Partial<Theme>) => {
      if (!theme) {
        return;
      }

      setTheme({
        ...theme,
        ...value,
      });
    },
    [theme]
  );

  useEffect(() => {
    secureStorage.getItem(SecureStorageKey.THEME_MODE).then(storedThemeMode => {
      const preferredColorScheme = Appearance.getColorScheme();

      const defaultTheme: Theme = {
        mode:
          (storedThemeMode as ThemeMode | null) ??
          colorSchemeToThemeMode[String(preferredColorScheme)],
      };

      setTheme(defaultTheme);
    });
  }, []);

  if (!theme) {
    return null;
  }

  return (
    <ThemeContext.Provider value={{ ...theme, set }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider };
