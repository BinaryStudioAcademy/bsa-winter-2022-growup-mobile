import { useContext } from 'react';
import { ThemeContext } from './context';

export const useTheme = () => {
  const value = useContext(ThemeContext);

  if (!value) {
    throw new Error('useTheme must be inside ThemeProvider');
  }

  return value;
};
