import { StyleSheet } from 'react-native';

import { AppColor } from 'src/common/enums';
import { DEFAULT_SCREEN_PADDING } from 'src/styles';

const styles = StyleSheet.create({
  screen: {
    padding: DEFAULT_SCREEN_PADDING,
    backgroundColor: AppColor.WHITE,
    flex: 1,
  },
  content: {
    justifyContent: 'center',
    minHeight: '100%',
  },
  inputContent: {
    marginBottom: 30,
    paddingHorizontal: 10,
  },
  buttonContainer: {
    paddingHorizontal: 20,
  },
  heading: {
    marginBottom: 10,
  },
  button: {
    marginBottom: 10,
  },
});

export default styles;
