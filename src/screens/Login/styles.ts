import { StyleSheet } from 'react-native';

import { AppColor } from 'src/common/enums';

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 27,
    marginVertical: 22,
    justifyContent: 'center',
  },
  formField: {
    backgroundColor: AppColor.INPUT_BACKGROUND,
    height: 45,
    marginTop: 17,
  },
  formFieldError: {
    backgroundColor: AppColor.INPUT_BACKGROUND,
    borderColor: AppColor.ACCENT,
    borderWidth: 0.5,
  },
  formFieldErrorMessage: {
    color: AppColor.ACCENT,
  },
  btnLogin: {
    borderRadius: 50,
    backgroundColor: AppColor.ACCENT,
    height: 45,
    justifyContent: 'center',
    marginTop: '45%',
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
    color: AppColor.ACCENT,
  },
  formIcon: {
    marginBottom: 0,
  },
});

export { styles };
