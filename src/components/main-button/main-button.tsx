import React from 'react';
import { Button } from 'react-native-paper';

import { ButtonMode } from 'src/common/enums';
import { useColor } from 'src/hooks';
import useStyles from './styles';

type MainButtonProps = React.ComponentPropsWithoutRef<typeof Button>;

const MainButton: React.FC<MainButtonProps> = ({
  children,
  style,
  labelStyle,
  mode = ButtonMode.TEXT,
  disabled,
  ...buttonProps
}) => {
  const styles = useStyles();
  const accent = useColor('ACCENT');

  const isOutlined = mode === ButtonMode.OUTLINED;

  return (
    <Button
      uppercase={false}
      labelStyle={[styles.text, disabled && styles.disabled, labelStyle]}
      style={[isOutlined && styles[ButtonMode.OUTLINED], style]}
      mode={mode}
      color={accent}
      disabled={disabled}
      {...buttonProps}
    >
      {children}
    </Button>
  );
};

export default MainButton;
