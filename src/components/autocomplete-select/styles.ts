import { StyleSheet } from 'react-native';

import { AppColor } from 'src/common/enums';

const styles = StyleSheet.create({
  list: {
    position: 'absolute',
    left: 0,
    right: 0,
    zIndex: 3,
    maxHeight: 150,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowColor: AppColor.BLACK,
    shadowRadius: 5,
    elevation: 5,
    backgroundColor: AppColor.INVISIBLE,
  },
  option: {
    backgroundColor: AppColor.WHITE,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  fill: {
    width: '100%',
    height: '100%',
  },
  touchablePosition: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 2,
  },
});

export default styles;
