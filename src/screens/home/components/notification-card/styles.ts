import { StyleSheet } from 'react-native';
import { AppColor } from 'src/common/enums';

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: AppColor.SHADOW,
    borderRadius: 10,
    paddingTop: 15,
    paddingBottom: 5,
    paddingHorizontal: 15,
  },
  button: {
    alignSelf: 'flex-end',
  },
});

export default styles;
