import { StyleSheet } from 'react-native';

import { AppColor, ButtonType } from 'src/common/enums';

const styles = StyleSheet.create({
  global: {
    borderRadius: 20,
  },
  [ButtonType.OUTLINED]: {
    borderWidth: 2,
    borderColor: AppColor.ACCENT,
  },
  [ButtonType.TEXT]: {},
  [ButtonType.CONTAINED]: {},
});

export default styles;
