import { StyleSheet } from 'react-native';

import { AppColor } from 'src/common/enums';

const styles = StyleSheet.create({
  indicator: {
    width: 16,
    height: 16,
    borderRadius: 8,
  },
  active: {
    backgroundColor: AppColor.SUCCESS,
  },
  inactive: {
    backgroundColor: AppColor.ERROR,
  },
});

export default styles;
