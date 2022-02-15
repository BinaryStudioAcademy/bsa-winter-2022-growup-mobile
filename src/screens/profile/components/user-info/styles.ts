import { StyleSheet } from 'react-native';

const LEVEL_COLOR = '#5C5D5F';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 15,
    height: '100%',
    width: '100%',
  },
  avatar: {
    alignSelf: 'center',
    marginBottom: 15,
  },
  name: {
    marginBottom: 8,
  },
  role: {
    fontSize: 16,
    marginBottom: 8,
  },
  levelWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    left: -5,
  },
  levelIcon: {
    backgroundColor: 'transparent',
  },
  levelText: {
    color: LEVEL_COLOR,
  },
});

export default styles;
