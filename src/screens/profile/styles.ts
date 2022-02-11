import { StyleSheet } from 'react-native';

import { AppColor } from 'src/common/enums';

export const styles = StyleSheet.create({
  fullHeight: {
    height: '100%',
  },
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
  content: {
    flex: 1,
    width: '100%',
    height: '100%',
    paddingTop: 15,
    backgroundColor: AppColor.WHITE,
  },
  swipeWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  swiperItem: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
