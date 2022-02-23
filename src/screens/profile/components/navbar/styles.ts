import { StyleSheet } from 'react-native';

import { AppColor } from 'src/common/enums';
import { DEFAULT_SCREEN_PADDING } from 'src/styles';
import { NAVBAR_BUTTON_WIDTH } from './constants';

const styles = StyleSheet.create({
  navbar: {
    backgroundColor: AppColor.GREY,
    paddingHorizontal: DEFAULT_SCREEN_PADDING,
    paddingVertical: 10,
  },
  contentContainer: {
    flex: 1,
  },
  button: {
    flex: 1,
    minWidth: NAVBAR_BUTTON_WIDTH,
    borderRadius: 7,
    backgroundColor: AppColor.WHITE,
  },
  activeButton: {
    backgroundColor: AppColor.ACCENT,
  },
});

export default styles;
