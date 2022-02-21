import { StyleSheet } from 'react-native';

import { AppColor } from 'src/common/enums';

const styles = StyleSheet.create({
  card: {
    padding: 15,
    borderRadius: 10,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowColor: AppColor.BLACK,
    shadowRadius: 5,
    elevation: 5,
    backgroundColor: AppColor.WHITE,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 10,
  },
  user: {
    flexDirection: 'row',
  },
  texts: {
    paddingLeft: 7,
  },
  spaceVert: {
    paddingBottom: 5,
  },
  indicator: {
    width: 16,
    height: 16,
    borderRadius: 8,
  },
  active: {
    backgroundColor: AppColor.SUCCESS,
  },
  inactive: {
    backgroundColor: AppColor.ERROR,
  },
  objective: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default styles;
