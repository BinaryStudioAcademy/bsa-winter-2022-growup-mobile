import { useTheme } from 'src/blocs/theme-bloc';
import { ThemeMode } from 'src/common/enums';

type Required = ReturnType<typeof require>;

const assets: Record<string, Record<ThemeMode, Required>> = {
  'images/Logo': {
    light: require('src/assets/images/Logo-light.png'),
    dark: require('src/assets/images/Logo-dark.png'),
  },
};

export const useAsset = (subpath: string): Required => {
  const { mode } = useTheme();
  return assets[subpath][mode];
};
