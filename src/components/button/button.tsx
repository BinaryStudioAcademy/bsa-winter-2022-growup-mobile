import React from 'react';
import { Button as ButtonPaper } from 'react-native-paper';
import { IconSource } from 'react-native-paper/lib/typescript/components/Icon';
import { AppColors, ButtonType } from '../../common/enums';

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
      color={AppColors.ACCENT}
    >
      {children}
    </ButtonPaper>
  );
};

export default Button;
