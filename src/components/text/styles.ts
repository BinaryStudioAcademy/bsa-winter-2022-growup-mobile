import { StyleSheet } from 'react-native';

import { AppColor, TextAppearance } from 'src/common/enums';

const styles = StyleSheet.create({
  [TextAppearance.HINT]: {
    color: AppColor.HINT,
  },
  [TextAppearance.BODY]: {
    color: AppColor.BLACK,
  },
});

export default styles;
