import React, { useState } from 'react';
import DropDown from 'react-native-paper-dropdown';
import { AppColor } from 'src/common/enums';

import styles from './styles';

type Props = Omit<
  React.ComponentPropsWithoutRef<typeof DropDown>,
  'visible' | 'onDismiss' | 'showDropDown'
>;

const Select: React.FC<Props> = ({ dropDownStyle = {}, ...dropDownProps }) => {
  const [open, setOpen] = useState<boolean>(false);

  const show = () => setOpen(true);
  const hide = () => setOpen(false);

  return (
    <DropDown
      dropDownStyle={{ ...styles.inputContainer, ...dropDownStyle }}
      mode="flat"
      activeColor={AppColor.ACCENT}
      visible={open}
      showDropDown={show}
      onDismiss={hide}
      {...dropDownProps}
    />
  );
};

export default Select;
