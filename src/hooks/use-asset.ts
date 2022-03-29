import { useTheme } from 'src/blocs/theme-bloc';

const assets = {
  'images/Logo': {
    light: require('src/assets/images/Logo-light.png'),
    dark: require('src/assets/images/Logo-dark.png'),
  },
} as const;

export const useAsset = (subpath: keyof typeof assets) => {
  const { mode } = useTheme();
  return assets[subpath][mode];
};
