import { configureFonts, DefaultTheme } from 'react-native-paper';

import { AppColor } from 'src/common/enums';
import fontConfig from '../fonts/font-config';

declare global {
  namespace ReactNativePaper {
    interface ThemeColors {
      secondary: string;
    }

    interface Fonts {
      semiBold: {
        fontFamily: string;
      };
      bold: {
        fontFamily: string;
      };
    }
  }
}

const theme = {
  ...DefaultTheme,
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
