import { StyleSheet } from 'react-native';

import { AppColor } from 'src/common/enums';

const styles = StyleSheet.create({
  fullHeight: {
    height: '100%',
  },
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    backgroundColor: AppColor.WHITE,
  },
  swiperWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  swiperItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
