import { StyleSheet } from 'react-native';

import { AppColor } from 'src/common/enums';

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: AppColor.SHADOW,
    borderRadius: 10,
  },
  cardContent: {
    marginHorizontal: 15,
    marginBottom: 10,
  },
  cardTitle: {
    marginVertical: 10,
  },
  cardActions: {
    borderTopWidth: 1,
    borderTopColor: AppColor.SHADOW,
    paddingHorizontal: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  actionButtons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  editIcon: {
    marginLeft: 20,
  },
  key: {
    marginRight: 5,
  },
  date: {
    marginLeft: 5,
  },
  text: {
    flexDirection: 'row',
    marginBottom: 10,
  },
});

export default styles;
