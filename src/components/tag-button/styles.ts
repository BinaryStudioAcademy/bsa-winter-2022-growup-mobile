import { StyleSheet } from 'react-native';

import { AppColor } from 'src/common/enums';

const styles = StyleSheet.create({
  button: {
    borderWidth: 2,
    borderColor: AppColor.PRIMARY,
  },
  content: {
    flexDirection: 'row-reverse',
  },
  text: {
    fontSize: 13,
  },
});

export default styles;
