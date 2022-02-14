import { StyleSheet } from 'react-native';

import { AppColor } from 'src/common/enums';

const styles = StyleSheet.create({
  screen: {
    backgroundColor: AppColor.WHITE,
  },
  content: {
    height: '85%',
    width: '100%',
  },
  buttonContainer: {
    width: '100%',
    height: '15%',
    paddingHorizontal: 20,
  },
});

export default styles;
