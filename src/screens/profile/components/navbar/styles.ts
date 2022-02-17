import { StyleSheet } from 'react-native';

import { AppColor } from 'src/common/enums';
import {
  BUTTON_PROFILE_NAVBAR_WIDTH,
  PROFILE_NAVBAR_WIDTH,
} from 'src/common/constants';

const styles = StyleSheet.create({
  navbar: {
    paddingTop: 10,
    justifyContent: 'space-between',
    width: '100%',
    height: 93,
    backgroundColor: AppColor.INPUT_BACKGROUND,
  },
  buttons: {
    flexDirection: 'row',
    backgroundColor: AppColor.WHITE,
    margin: 10,
    width: PROFILE_NAVBAR_WIDTH,
    alignSelf: 'center',
    borderRadius: 7,
  },
  title: {
    fontSize: 17,
    textAlign: 'center',
  },
  button: {
    flex: 1,
    width: BUTTON_PROFILE_NAVBAR_WIDTH,
    borderRadius: 0,
  },
  activeButton: {
    borderRadius: 7,
    backgroundColor: AppColor.ACCENT,
  },
});

export default styles;
