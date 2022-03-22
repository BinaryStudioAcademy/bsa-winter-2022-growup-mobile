import { StyleSheet } from 'react-native';

import { AppColor } from 'src/common/enums';
import { DEFAULT_SCREEN_PADDING } from 'src/styles';

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
    padding: DEFAULT_SCREEN_PADDING,
  },
  containerHeader: {
    color: AppColor.PRIMARY,
  },
  card: {
    marginVertical: 10,
  },
  quizContent: {
    flex: 1,
    padding: DEFAULT_SCREEN_PADDING,
    justifyContent: 'center',
    alignItems: 'center',
  },
  quizHeader: {
    marginVertical: 10,
  },
});

export default styles;
