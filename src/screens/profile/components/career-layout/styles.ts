import { StyleSheet } from 'react-native';

import { AppColor } from 'src/common/enums';

const LIGHTGREY = '#E1DBEA';

const styles = StyleSheet.create({
  careerWrapper: {
    padding: 20,
    flexDirection: 'row',
  },
  cards: {
    flex: 1,
    marginRight: 15,
  },
  careerItem: {
    marginTop: 20,
    marginLeft: 15,
    width: '100%',
  },
  divider: {
    width: 1,
    height: '95%',
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
    fontSize: 18,
    lineHeight: 24,
    fontFamily: 'NunitoSans',
    fontWeight: '700',
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
  yearWrapper: {
    position: 'relative',
  },
  careerYear: {
    paddingTop: 5,
    lineHeight: 12,
    paddingBottom: 5,
    color: AppColor.SECONDARY,
    fontFamily: 'NunitoSans',
    fontWeight: 'normal',
  },
  badge: {
    backgroundColor: AppColor.SECONDARY,
    position: 'absolute',
    left: -19,
    top: 3,
    width: 8,
    height: 8,
    borderRadius: 5,
  },
  hint: {
    color: AppColor.HINT,
    fontFamily: 'NunitoSans',
    fontWeight: '600',
    lineHeight: 19,
  },
  text: {
    fontFamily: 'NunitoSans',
    fontWeight: '600',
    lineHeight: 19,
    marginBottom: 5,
  },
});

export default styles;
