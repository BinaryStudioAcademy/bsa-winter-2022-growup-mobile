import { StyleSheet } from 'react-native';

import { AppColor } from 'src/common/enums';

const styles = StyleSheet.create({
  careerWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 60,
  },
  careerItem: {
    marginLeft: 15,
  },
  cards: {
    flex: 1,
  },
  divider: {
    width: 1,
    height: '95%',
    backgroundColor: AppColor.SHADOW,
    marginTop: 25,
    marginLeft: 5,
  },
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
  careerYear: {
    marginTop: 5,
    lineHeight: 16,
    marginBottom: 5,
    color: AppColor.SECONDARY,
    fontSize: 12,
  },
  badge: {
    backgroundColor: AppColor.SECONDARY,
    left: -19,
    top: 17,
    width: 8,
    height: 8,
    borderRadius: 5,
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
