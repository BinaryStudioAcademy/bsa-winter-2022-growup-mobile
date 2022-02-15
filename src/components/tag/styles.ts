import { StyleSheet } from 'react-native';
import { AppColor, TagType } from 'src/common/enums';

const styles = StyleSheet.create({
  global: {
    borderRadius: 15,
    paddingVertical: 1,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  [TagType.COMMON]: {
    backgroundColor: AppColor.TAG_COMMON_BACKGROUND,
  },
  [TagType.ATTENTION]: {
    backgroundColor: AppColor.TAG_ATTENTION_BACKGROUND,
    borderWidth: 2,
    borderColor: AppColor.ACCENT,
  },
  text: {
    color: AppColor.TAG_TEXT_COMMON,
    fontFamily: 'NunitoSans-Bold',
  },
  textAttention: {
    color: AppColor.ACCENT,
    fontFamily: 'NunitoSans-Bold',
  },
  textMargin: {
    marginRight: 5,
  },
});

export default styles;
