import { useCallback } from 'react';

import { useTheme } from 'src/blocs/theme-bloc';
import { SecureStorageKey, ThemeMode } from 'src/common/enums';
import { secureStorage } from 'src/services';

export const useSwitchThemeMode = (): ((mode: ThemeMode) => void) => {
  const { set } = useTheme();

  return useCallback(
    async (mode: ThemeMode) => {
      await secureStorage.setItem(SecureStorageKey.THEME_MODE, mode);
      set({ mode });
    },
    [set]
  );
};
