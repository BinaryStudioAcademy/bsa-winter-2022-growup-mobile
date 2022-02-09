import React from 'react';
import { Button as ButtonPaper } from 'react-native-paper';
import { IconSource } from 'react-native-paper/lib/typescript/components/Icon';
<<<<<<< HEAD

import { AppColor, ButtonType } from 'src/common/enums';
=======
import { AppColors, ButtonType } from '../../common/enums';

>>>>>>> 1b9169a (feat: button component added)
import styles from './styles';

type IButtonProps = {
  children: Element;
  type: ButtonType;
  onPress: () => void;
  icon?: IconSource;
};

const Button: React.FC<IButtonProps> = ({ children, type, onPress, icon }) => {
  return (
    <ButtonPaper
      uppercase={false}
      style={{ ...styles.global, ...styles[type] }}
      onPress={onPress}
      mode={type}
      icon={icon}
<<<<<<< HEAD
      color={AppColor.ACCENT}
=======
      color={AppColors.ACCENT}
>>>>>>> 1b9169a (feat: button component added)
    >
      {children}
    </ButtonPaper>
  );
};

export default Button;
