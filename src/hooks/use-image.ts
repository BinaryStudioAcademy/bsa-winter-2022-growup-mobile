import { useTheme } from 'src/blocs/theme-bloc';
import { ThemeMode } from 'src/common/enums';

type Required = ReturnType<typeof require>;

const images: Record<string, Record<ThemeMode, Required>> = {
  'images/Logo': {
    light: require('src/assets/images/Logo-light.png'),
    dark: require('src/assets/images/Logo-dark.png'),
  },
};

export const useImage = (subpath: string): Required => {
  const { mode } = useTheme();
  return images[subpath][mode];
};
