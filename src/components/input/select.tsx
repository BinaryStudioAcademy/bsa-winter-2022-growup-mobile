import React, { useState } from 'react';
import DropDown from 'react-native-paper-dropdown';

import { AppColor } from 'src/common/enums';
import styles from './styles';
import theme from './theme';

type Props = Omit<
  React.ComponentPropsWithoutRef<typeof DropDown>,
  'visible' | 'onDismiss' | 'showDropDown'
>;

export type SelectUIProps = Omit<Props, 'value' | 'setValue'>;

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
      theme={theme}
      inputProps={{ style: styles.inputContainer }}
      {...dropDownProps}
    />
  );
};

export default Select;
