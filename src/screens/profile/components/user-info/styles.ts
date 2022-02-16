import { StyleSheet } from 'react-native';

import { AppColor } from 'src/common/enums';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 15,
    flex: 1,
  },
  avatar: {
    alignSelf: 'center',
    marginBottom: 15,
  },
  name: {
    marginBottom: 8,
  },
  role: {
    fontSize: 16,
    marginBottom: 8,
  },
  levelWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  levelText: {
    marginLeft: 5,
    color: AppColor.SECOND_LEVEL_COLOR,
  },
});

export default styles;
