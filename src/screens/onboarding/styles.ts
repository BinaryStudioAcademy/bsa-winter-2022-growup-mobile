import { StyleSheet } from 'react-native';
import { AppColor } from 'src/common/enums';

const styles = StyleSheet.create({
  content: {
    height: '90%',
    width: '100%',
    backgroundColor: AppColor.WHITE,
  },
  buttonContainer: {
    width: '100%',
    height: '10%',
    paddingHorizontal: 20,
  },
});

export default styles;
