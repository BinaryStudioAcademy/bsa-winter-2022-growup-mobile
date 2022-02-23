import React, { useState } from 'react';
import DropDown from 'react-native-paper-dropdown';

import { AppColor } from 'src/common/enums';
import styles from '../shared/input-style/styles';

type Props = Omit<
  React.ComponentPropsWithoutRef<typeof DropDown>,
  'visible' | 'onDismiss' | 'showDropDown'
>;

const Select: React.FC<Props> = dropDownProps => {
  const [open, setOpen] = useState<boolean>(false);

  const handleShow = () => setOpen(true);

  const handleHide = () => setOpen(false);

  return (
    <DropDown
      mode="flat"
      activeColor={AppColor.ACCENT}
      visible={open}
      showDropDown={handleShow}
      onDismiss={handleHide}
      inputProps={{ style: styles.inputContainer }}
      {...dropDownProps}
    />
  );
};

export default Select;
