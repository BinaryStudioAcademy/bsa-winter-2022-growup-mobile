import { StyleSheet } from 'react-native';
<<<<<<< HEAD

import { AppColor, ButtonType } from 'src/common/enums';
=======
import { AppColors } from '../../common/enums';
>>>>>>> 1b9169a (feat: button component added)

const styles = StyleSheet.create({
  global: {
    borderRadius: 20,
  },
<<<<<<< HEAD
  [ButtonType.OUTLINED]: {
    borderWidth: 2,
    borderColor: AppColor.ACCENT,
  },
  [ButtonType.TEXT]: {},
  [ButtonType.CONTAINED]: {},
=======
  outlined: {
    borderWidth: 2,
    borderColor: AppColors.ACCENT,
  },
  text: {},
  contained: {},
>>>>>>> 1b9169a (feat: button component added)
});

export default styles;
