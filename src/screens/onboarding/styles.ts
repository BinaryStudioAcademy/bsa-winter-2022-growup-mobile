import { StyleSheet } from 'react-native';

import { AppColor } from 'src/common/enums';

const styles = StyleSheet.create({
  screen: {
    backgroundColor: AppColor.WHITE,
    flex: 1,
    justifyContent: 'space-between',
  },
  content: {
    width: '100%',
    height: '80%',
  },
  buttonContainer: {
    width: '100%',
    marginBottom: 15,
    paddingHorizontal: 20,
  },
  completeButton: {
    borderWidth: 2,
    borderColor: AppColor.ACCENT,
  },
});

export default styles;
