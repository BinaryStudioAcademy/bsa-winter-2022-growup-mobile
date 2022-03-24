import { createContext } from 'react';

import { ThemeMode } from 'src/common/enums';

type Theme = {
  mode: ThemeMode;
};

type ThemeContextValue = Theme & {
  set(value: Partial<Theme>): void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

export { ThemeContext };
export type { Theme, ThemeContextValue };
