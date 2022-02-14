import { StyleSheet } from 'react-native';

import { AppColor } from 'src/common/enums';

const styles = StyleSheet.create({
  screen: {
    padding: 20,
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
