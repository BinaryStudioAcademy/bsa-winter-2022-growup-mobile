import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  button: {
    borderRadius: 7,
    fontSize: 13,
    fontFamily: 'NunitoSans-SemiBold',
    paddingHorizontal: 20,
    paddingVertical: 5,
    backgroundColor: 'white',
    color: 'black',
  },
  activeButton: {
    backgroundColor: '#EE2A64',
    color: 'white',
    elevation: 15,
    fontSize: 14,
  },
});

export default styles;
