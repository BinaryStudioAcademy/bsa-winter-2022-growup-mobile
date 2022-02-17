import { StyleSheet } from 'react-native';

import { AppColor } from 'src/common/enums';
import { DEFAULT_SCREEN_PADDING } from 'src/styles';

const styles = StyleSheet.create({
  screen: {
    padding: DEFAULT_SCREEN_PADDING,
    backgroundColor: AppColor.WHITE,
    justifyContent: 'space-between',
    flex: 1,
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
  dateInput: {
    marginTop: 15,
  },
});

export default styles;
