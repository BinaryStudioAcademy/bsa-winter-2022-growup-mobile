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
  formFieldErrorMessage: {
    color: AppColor.ACCENT,
  },
  btnLogin: {
    marginHorizontal: 27,
  },
  logo: {
    width: 163,
    height: 48,
    alignSelf: 'center',
    marginTop: '20%',
  },
  footer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 15,
  },
  formIcon: {
    marginBottom: 0,
  },
});

export { styles };
