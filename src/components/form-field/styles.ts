import { StyleSheet } from 'react-native';

import { AppColor } from 'src/common/enums';

const styles = StyleSheet.create({
  field: {
    width: '100%',
    paddingBottom: 15,
  },
  error: {
    paddingTop: 4,
    color: AppColor.ACCENT,
  },
});

export default styles;
