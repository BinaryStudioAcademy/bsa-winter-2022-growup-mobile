import { useTheme } from 'src/blocs/theme-bloc';
import { AppColorDark, AppColorLight, ThemeMode } from 'src/common/enums';

type ColorName = keyof typeof AppColorLight & keyof typeof AppColorDark;

const modeToColorEnum = {
  [ThemeMode.Light]: AppColorLight,
  [ThemeMode.Dark]: AppColorDark,
};

export const useColor = (name: ColorName): string => {
  const { mode } = useTheme();
  return modeToColorEnum[mode][name];
};
