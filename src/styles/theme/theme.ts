import { useMemo } from 'react';
import { configureFonts, DefaultTheme } from 'react-native-paper';
import { Theme } from 'react-native-paper/lib/typescript/types';

import { useColor } from 'src/hooks';
import fontConfig from '../fonts/font-config';

type ThemeProps = {
  colors: {
    secondary: string;
  };
} & Theme;

const usePaperTheme = (): ThemeProps => {
  const primary = useColor('PRIMARY');
  const accent = useColor('ACCENT');
  const secondary = useColor('SECONDARY');
  const white = useColor('WHITE');
  const black = useColor('BLACK');

  return useMemo(
    () => ({
      ...DefaultTheme,
      roundness: 20,
      colors: {
        ...DefaultTheme.colors,
        primary: primary,
        accent: accent,
        text: black,
        secondary: secondary,
        surface: white,
      },
      fonts: configureFonts(fontConfig),
    }),
    [primary, accent, secondary, white, black]
  );
};

export default usePaperTheme;
