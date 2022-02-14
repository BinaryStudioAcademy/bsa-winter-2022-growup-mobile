import React from 'react';
import { Button } from 'react-native-paper';

import { AppColor, ButtonMode, IconName } from 'src/common/enums';
import styles from './styles';

type TagButtonProps = React.ComponentPropsWithoutRef<typeof Button>;

const TagButton: React.FC<TagButtonProps> = ({
  children,
  icon = IconName.PLUS,
  style,
  contentStyle,
  labelStyle,
  ...buttonProps
}) => {
  return (
    <Button
      uppercase={false}
      style={[styles.button, style]}
      contentStyle={[styles.content, contentStyle]}
      labelStyle={[styles.text, labelStyle]}
      mode={ButtonMode.OUTLINED}
      icon={icon}
      color={AppColor.PRIMARY}
      compact={true}
      {...buttonProps}
    >
      {children}
    </Button>
  );
};

export default TagButton;
