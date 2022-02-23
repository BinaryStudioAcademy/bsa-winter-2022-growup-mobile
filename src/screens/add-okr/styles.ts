import { StyleSheet } from 'react-native';

import { AppColor } from 'src/common/enums';
import { DEFAULT_SCREEN_PADDING } from 'src/styles';

const styles = StyleSheet.create({
  screen: {
    padding: DEFAULT_SCREEN_PADDING,
    backgroundColor: AppColor.WHITE,
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
  addButton: {
    fontSize: 16,
  },
  keyResultContent: {
    marginBottom: 50,
    paddingHorizontal: 10,
    alignItems: 'flex-start',
  },
  keyResult: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 10,
    marginVertical: 5,
  },
  error: {
    color: AppColor.ERROR,
  },
});

export default styles;
