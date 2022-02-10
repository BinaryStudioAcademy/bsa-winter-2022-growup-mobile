import { StyleSheet } from 'react-native';

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
    fontSize: 24,
    lineHeight: 32.74,
    color: '#000',
  },
  job: {
    fontSize: 16,
    lineHeight: 21.82,
    marginBottom: 8,
  },
  levelWrapper: {
    flexDirection: 'row',
  },
  levelIcon: {
    backgroundColor: 'transparent',
  },
  levelText: {
    color: '#000',
    lineHeight: 19.1,
    fontSize: 14,
  },
});
