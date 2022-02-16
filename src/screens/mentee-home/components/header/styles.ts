import { StyleSheet } from 'react-native';
import { AppColor } from 'src/common/enums';

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: AppColor.WHITE,
    borderBottomWidth: 1,
    borderBottomColor: AppColor.SHADOW,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
});

export default styles;
