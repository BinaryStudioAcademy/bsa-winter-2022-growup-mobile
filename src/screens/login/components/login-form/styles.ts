import { StyleSheet } from 'react-native';

import { AppColor } from 'src/common/enums';

const styles = StyleSheet.create({
  content: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  formField: {
    backgroundColor: AppColor.INPUT_BACKGROUND,
    height: 45,
    marginTop: 17,
    borderRadius: 8,
  },
});

export { styles };
