import { StyleSheet } from 'react-native';

import { AppColor } from 'src/common/enums';
import { DEFAULT_SCREEN_PADDING } from 'src/styles';

const styles = StyleSheet.create({
  screen: {
    backgroundColor: AppColor.WHITE,
    flex: 1,
    padding: DEFAULT_SCREEN_PADDING,
  },
  content: {
    flex: 1,
  },
  quizItem: {
    justifyContent: 'center',
  },
  questionCount: {
    position: 'absolute',
    top: 0,
    alignSelf: 'center',
  },
  completeButton: {
    borderWidth: 2,
    borderColor: AppColor.ACCENT,
  },
});

export default styles;
