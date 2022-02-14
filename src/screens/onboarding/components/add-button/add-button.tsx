import React from 'react';
import { AppColor } from 'src/common/enums';
import { MainButton } from 'src/components';

import styles from './styles';

type AddButtonProps = React.ComponentPropsWithoutRef<typeof MainButton>;

const AddButton: React.FC<AddButtonProps> = ({ children }) => {
  return (
    <MainButton
      labelStyle={styles.buttonText}
      icon="plus-box-multiple"
      mode="text"
      compact={true}
      color={AppColor.PRIMARY}
    >
      {children}
    </MainButton>
  );
};

export default AddButton;
