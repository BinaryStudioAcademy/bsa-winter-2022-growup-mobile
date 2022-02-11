import React, { useState } from 'react';
import DropDown from 'react-native-paper-dropdown';
import { AppColor } from 'src/common/enums';

import styles from './styles';
import theme from './theme';

type Props = Omit<
  React.ComponentPropsWithoutRef<typeof DropDown>,
  'visible' | 'onDismiss' | 'showDropDown'
>;

const Select: React.FC<Props> = dropDownProps => {
  const [open, setOpen] = useState<boolean>(false);

  const show = () => setOpen(true);
  const hide = () => setOpen(false);

  return (
    <DropDown
      mode="flat"
      activeColor={AppColor.ACCENT}
      visible={open}
      showDropDown={show}
      onDismiss={hide}
      // eslint-ignore-next-line @typescript-eslint/no-explicit-any
      theme={theme as any}
      inputProps={{ style: styles.inputContainer }}
      {...dropDownProps}
    />
  );
};

export default Select;
