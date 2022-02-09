import { StyleSheet } from 'react-native';
import { AppColors } from '../../common/enums';

const styles = StyleSheet.create({
  global: {
    color: AppColors.BLACK,
  },
  body: {
    fontSize: 14,
    fontFamily: 'NunitoSans-Regular',
  },
  menu: {
		fontSize: 18,
    fontFamily: 'NunitoSans-Regular',
	},
  tub: {
		fontSize: 16,
    fontFamily: 'NunitoSans-SemiBold',
	},
  button: {
		fontSize: 16,
    fontFamily: 'NunitoSans-Bold',
	},
  caption: {
		fontSize: 12,
    fontFamily: 'NunitoSans-Regular',
	},
  h4: {
		fontSize: 24,
    fontFamily: 'NunitoSans-Bold',
	},
  h5: {
		fontSize: 28,
    fontFamily: 'NunitoSans-Bold',
	},
  h6: {
		fontSize: 16,
    fontFamily: 'NunitoSans-Bold',
	},
});

export default styles;
