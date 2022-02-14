import { StyleSheet } from 'react-native';

import { AppColor, ButtonMode } from 'src/common/enums';

const styles = StyleSheet.create({
  [ButtonMode.OUTLINED]: {
    borderWidth: 2,
    borderColor: AppColor.ACCENT,
  },
  text: {
    fontFamily: 'NunitoSans-Bold',
    fontSize: 16,
  },
});

export default styles;
