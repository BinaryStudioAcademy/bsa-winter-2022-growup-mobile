import React from 'react';

import { IconName } from 'src/common/enums';
import { MainButton } from 'src/components';
import { useColor } from 'src/hooks';
import useStyles from './styles';

type AddButtonProps = React.ComponentPropsWithoutRef<typeof MainButton>;

const AddButton: React.FC<AddButtonProps> = ({ children, ...buttonProps }) => {
  const styles = useStyles();
  const colorPrimary = useColor('PRIMARY');

  return (
    <MainButton
      labelStyle={styles.buttonText}
      icon={IconName.PLUS_BOX_MULTIPLE}
      mode="text"
      compact={true}
      color={colorPrimary}
      {...buttonProps}
    >
      {children}
    </MainButton>
  );
};

export default AddButton;
