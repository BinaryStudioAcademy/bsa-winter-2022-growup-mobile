import { StyleSheet } from 'react-native';

import { AppColor } from 'src/common/enums';

const styles = StyleSheet.create({
  fullHeight: {
    height: '100%',
  },
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
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
    color: AppColor.BLACK,
    borderRadius: 0,
  },
  active: {
    borderRadius: 7,
    backgroundColor: AppColor.ACCENT,
    flex: 1,
  },
  content: {
    flex: 1,
    paddingTop: 30,
    backgroundColor: AppColor.WHITE,
  },
  swipeWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
