import { StyleSheet } from 'react-native';

import { AppColor } from 'src/common/enums';

const styles = StyleSheet.create({
  barStyle: {
    borderWidth: 0.5,
    borderBottomWidth: 1,
    backgroundColor: AppColor.PRIMARY,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderColor: AppColor.NAVIGATION_SECONDARY,
    overflow: 'hidden',
  },
});

export default styles;
