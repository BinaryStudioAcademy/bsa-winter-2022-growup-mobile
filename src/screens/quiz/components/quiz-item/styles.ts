import { StyleSheet } from 'react-native';

import { AppColor } from 'src/common/enums';

const styles = StyleSheet.create({
  question: {
    color: AppColor.PRIMARY,
    marginLeft: 10,
    fontSize: 20,
  },
  answersContainer: {
    marginVertical: 10,
  },
  answerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
  },
  answerText: {
    flex: 1,
    flexWrap: 'wrap',
  },
});

export default styles;
