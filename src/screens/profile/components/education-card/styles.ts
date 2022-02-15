import { StyleSheet } from 'react-native';
import { AppColor } from 'src/common/enums';

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: AppColor.SHADOW,
  },
  header: {
    paddingVertical: 20,
    paddingHorizontal: 27,
    gap: 5,
  },
  footer: {
    paddingVertical: 15,
    paddingHorizontal: 27,
    borderTopWidth: 1,
    borderTopColor: AppColor.SHADOW,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  keyvalue: {
    flexDirection: 'row',
    gap: 7,
    fontSize: 14,
  },
  icons: {
    flexDirection: 'row',
    gap: 25,
  },
  date: {
    flexDirection: 'row',
    gap: 7,
    fontSize: 12,
  },
});

export default styles;
