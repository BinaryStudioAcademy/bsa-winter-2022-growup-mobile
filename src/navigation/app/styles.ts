import { StyleSheet } from 'react-native';
import { AppColors } from '../../common/enums/colors/colors';

const styles = StyleSheet.create({
  barStyle: {
    borderWidth: 0.5,
    borderBottomWidth: 1,
    backgroundColor: AppColors.PURPLE,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderColor: AppColors.NAVIGATION_SECONDARY,
    overflow: 'hidden',
  },
});

export default styles;
