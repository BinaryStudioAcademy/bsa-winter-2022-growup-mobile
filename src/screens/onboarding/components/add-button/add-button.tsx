import React from 'react';
import { AppColor, IconName } from 'src/common/enums';
import { MainButton } from 'src/components';

import styles from './styles';

type AddButtonProps = React.ComponentPropsWithoutRef<typeof MainButton>;

const AddButton: React.FC<AddButtonProps> = ({ children, ...buttonProps }) => {
  return (
    <MainButton
      labelStyle={styles.buttonText}
      icon={IconName.PLUS_BOX_MULTIPLE}
      mode="text"
      compact={true}
      color={AppColor.PRIMARY}
      {...buttonProps}
    >
      {children}
    </MainButton>
  );
};

export default AddButton;
