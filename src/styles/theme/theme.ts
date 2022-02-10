import { configureFonts, DefaultTheme } from 'react-native-paper';
import { Theme } from 'react-native-paper/lib/typescript/types';

import { AppColor } from 'src/common/enums';
import fontConfig from '../fonts/font-config';

type ThemeProps = {
  colors: {
    secondary: string;
  };
} & Theme;

const theme: ThemeProps = {
  ...DefaultTheme,
  roundness: 20,
  colors: {
    ...DefaultTheme.colors,
    primary: AppColor.PRIMARY,
    accent: AppColor.ACCENT,
    text: AppColor.BLACK,
    secondary: AppColor.SECONDARY,
    surface: AppColor.WHITE,
  },
  fonts: configureFonts(fontConfig),
};

export default theme;
