import React from 'react';
import { Button as ButtonPaper } from 'react-native-paper';
import { IconSource } from 'react-native-paper/lib/typescript/components/Icon';
<<<<<<< HEAD
<<<<<<< HEAD

import { AppColor, ButtonType } from 'src/common/enums';
=======
import { AppColors, ButtonType } from '../../common/enums';
=======
import { AppColors, ButtonType } from 'src/common/enums';
>>>>>>> c6bb634 (refactor: changed imports with base url)

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
