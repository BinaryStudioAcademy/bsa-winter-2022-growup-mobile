import { StyleSheet } from 'react-native';
import { AppColor } from 'src/common/enums';

export const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginTop: 15,
    height: '100%',
    width: '60%',
  },
  avatar: {
    alignSelf: 'center',
    marginBottom: 10,
  },
  title: {
    fontFamily: 'NunitoSans-Regular',
    fontSize: 24,
    lineHeight: 32.74,
    color: AppColor.BLACK,
    fontWeight: '700',
  },
  job: {
    fontFamily: 'NunitoSans-Regular',
    fontSize: 16,
    lineHeight: 21.82,
    marginBottom: 8,
    fontWeight: '400',
  },
  levelWrapper: {
    flexDirection: 'row',
  },
  levelIcon: {
    backgroundColor: 'transparent',
  },
  levelText: {
    fontFamily: 'NunitoSans-SemiBold',
    color: AppColor.BLACK,
    lineHeight: 19.1,
    fontSize: 14,
  },
});
