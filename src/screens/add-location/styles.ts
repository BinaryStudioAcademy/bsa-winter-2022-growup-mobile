import { StyleSheet } from 'react-native';

import { AppColor } from 'src/common/enums';
import { DEFAULT_SCREEN_PADDING } from 'src/styles';

const styles = StyleSheet.create({
  screen: {
    padding: DEFAULT_SCREEN_PADDING,
    backgroundColor: AppColor.WHITE,
    justifyContent: 'space-between',
    height: '100%',
  },
  inputContent: {
    marginBottom: 30,
  },
  buttonContainer: {
    height: '15%',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  heading: {
    marginBottom: 10,
  },
});

export default styles;
