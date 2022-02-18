import { StyleSheet } from 'react-native';

import { AppColor } from 'src/common/enums';

const styles = StyleSheet.create({
  content: {
    flex: 1,
  },
  container: {
    flex: 1,
    marginTop: '20%',
    marginHorizontal: 27,
  },
  formField: {
    backgroundColor: AppColor.INPUT_BACKGROUND,
    height: 45,
    marginTop: 17,
    borderRadius: 8,
  },
  btnLogin: {
    marginHorizontal: 27,
  },
  logo: {
    height: 48,
    alignSelf: 'center',
    marginTop: '20%',
    resizeMode: 'contain',
  },
  footer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 15,
  },
});

export { styles };
