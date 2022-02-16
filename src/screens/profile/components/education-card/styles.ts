import { StyleSheet } from 'react-native';
import { AppColor } from 'src/common/enums';

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: AppColor.SHADOW,
    borderRadius: 10,
  },
  header: {
    paddingVertical: 20,
    paddingHorizontal: 27,
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
    paddingTop: 5,
    fontSize: 14,
  },
  key: {
    paddingRight: 7,
  },
  date: {
    flexDirection: 'row',
    alignItems: 'center',
    fontSize: 12,
  },
  icons: {
    flexDirection: 'row',
  },
  calendarIcon: {
    paddingRight: 7,
  },
  editIcon: {
    paddingRight: 25,
  },
});

export default styles;
