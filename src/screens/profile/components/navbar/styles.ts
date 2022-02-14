import { Dimensions, StyleSheet } from 'react-native';

import { AppColor } from 'src/common/enums';

const WIDTH = Dimensions.get('screen').width * 0.8;
const BUTTON_WIDTH = Math.ceil(WIDTH / 3);

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
    width: '80%',
    alignSelf: 'center',
    borderRadius: 7,
  },
  title: {
    color: AppColor.BLACK,
    fontSize: 17,
    textAlign: 'center',
    fontFamily: 'NunitoSans-Regular',
  },
  btn: {
    flex: 1,
    width: BUTTON_WIDTH,
    borderRadius: 0,
  },
  active: {
    width: BUTTON_WIDTH,
    borderRadius: 7,
    backgroundColor: AppColor.ACCENT,
    flex: 1,
  },
});

export default styles;
