import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  headerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#edebeb',
    height: 100,
    borderBottomWidth: 1,
    borderColor: '#d6d6d6',
  },
  headerTitle: {
    fontSize: 17,
    fontFamily: 'NunitoSans-SemiBold',
    fontWeight: '400',
    margin: 15,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 13,
    fontFamily: 'NunitoSans-SemiBold',
  },
});

export default styles;
