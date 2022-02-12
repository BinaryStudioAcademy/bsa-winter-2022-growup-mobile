import { StyleSheet } from 'react-native';

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
  info: {
    position: 'relative',
    paddingBottom: 32,
  },
  name: {
    marginBottom: 8,
    fontFamily: 'NunitoSans',
    fontWeight: '700',
  },
  role: {
    fontFamily: 'NunitoSans',
  },
  levelWrapper: {
    flexDirection: 'row',
    position: 'absolute',
    alignItems: 'center',
    bottom: 0,
    left: -5,
  },
  levelIcon: {
    backgroundColor: 'transparent',
  },
});

export default styles;
