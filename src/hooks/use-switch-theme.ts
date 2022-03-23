import { useCallback } from 'react';
import { useTheme } from 'src/blocs/theme-bloc';
import { ThemeMode } from 'src/common/enums';

export const useSwitchTheme = (): ((mode: ThemeMode) => void) => {
  const { set } = useTheme();
  return useCallback((mode: ThemeMode) => set({ mode }), [set]);
};
