import { StyleSheet } from 'react-native';
import { AppColor } from 'src/common/enums';

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: AppColor.WHITE,
    justifyContent: 'space-between',
    height: '100%',
    flex: 1,
  },
  inputContent: {
    marginBottom: 30,
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
