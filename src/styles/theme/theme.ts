import { configureFonts, DefaultTheme } from 'react-native-paper';
import { AppColors } from '../../common/enums';
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
    primary: AppColors.PRIMARY,
    accent: AppColors.ACCENT,
    text: AppColors.BLACK,
    secondary: AppColors.SECONDARY,
    surface: AppColors.WHITE,
  },
  fonts: configureFonts(fontConfig),
};

export default theme;
