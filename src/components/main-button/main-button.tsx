import React from 'react';
import { Button } from 'react-native-paper';

import { AppColor, ButtonMode } from 'src/common/enums';
import styles from './styles';

type MainButtonProps = React.ComponentPropsWithoutRef<typeof Button>;

const MainButton: React.FC<MainButtonProps> = ({
  children,
  mode = ButtonMode.TEXT,
  ...buttonProps
}) => {
  return (
    <Button
      uppercase={false}
      style={mode === ButtonMode.OUTLINED && styles[ButtonMode.OUTLINED]}
      mode={mode}
      color={AppColor.ACCENT}
      {...buttonProps}
    >
      {children}
    </Button>
  );
};

export default MainButton;
