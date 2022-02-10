import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 27,
    marginVertical: 22,
    justifyContent: 'center',
  },
  formField: {
    backgroundColor: '#F6F7F9',
    height: 45,
    marginBottom: 17,
  },
  btnLogin: {
    borderRadius: 50,
    backgroundColor: '#EE2A64',
    height: 45,
    justifyContent: 'center',
    marginTop: '50%',
  },
  logo: {
    width: 163,
    height: 48,
    alignSelf: 'center',
    marginTop: '20%',
    marginVertical: '20%',
  },
  footer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: '5%',
  },
  footerRedirect: {
    marginLeft: 5,
    color: '#EE2A64',
  },
});

export { styles };
