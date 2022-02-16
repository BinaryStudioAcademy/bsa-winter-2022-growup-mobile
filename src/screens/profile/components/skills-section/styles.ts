import { StyleSheet } from 'react-native';
import { AppColor } from 'src/common/enums';

const styles = StyleSheet.create({
  tagsContent: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
  },
  tag: {
    margin: 3,
  },
  heading: {
    marginBottom: 10,
    marginLeft: 5,
    fontWeight: '700',
  },
  hintHeader: {
    fontSize: 12,
    color: AppColor.TEXT_GRAY,
  },
});

export default styles;
