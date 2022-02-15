import { StyleSheet } from 'react-native';

import { AppColor } from 'src/common/enums';

const LIGHTGREY = '#E1DBEA';

const styles = StyleSheet.create({
  careerWrapper: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cards: {
    flex: 1,
    marginRight: 15,
  },
  careerItem: {
    marginLeft: 15,
    width: '100%',
  },
  divider: {
    width: 1,
    height: '90%',
    backgroundColor: LIGHTGREY,
    marginTop: 25,
  },
  card: {
    borderWidth: 1,
    borderColor: LIGHTGREY,
    borderRadius: 10,
  },
  cardContent: {
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 10,
  },
  cardTitle: {
    marginTop: 10,
    marginBottom: 10,
  },
  cardActions: {
    marginLeft: 15,
    marginRight: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 0,
  },
  actionsBtn: {
    flexDirection: 'row',
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
  hint: {
    color: AppColor.HINT,
    marginRight: 5,
  },
  text: {
    flexDirection: 'row',
    marginBottom: 10,
  },
});

export default styles;
