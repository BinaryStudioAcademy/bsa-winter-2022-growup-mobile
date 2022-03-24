import React, { useState } from 'react';
import DropDown from 'react-native-paper-dropdown';

import { useColor } from 'src/hooks';
import useStyles from '../shared/input-style/styles';
import { Text } from '..';

type Props = Omit<
  React.ComponentPropsWithoutRef<typeof DropDown>,
  'visible' | 'onDismiss' | 'showDropDown'
>;

const Select: React.FC<Props> = ({ label, ...dropDownProps }) => {
  const styles = useStyles();
  const colorAccent = useColor('ACCENT');

  const [open, setOpen] = useState<boolean>(false);

  const handleShow = () => setOpen(true);
  const handleHide = () => setOpen(false);

  return (
    <DropDown
      mode="flat"
      activeColor={colorAccent}
      visible={open}
      showDropDown={handleShow}
      onDismiss={handleHide}
      inputProps={{
        style: styles.inputContainer,
        label: label && <Text style={styles.label}>{label}</Text>,
      }}
      {...dropDownProps}
    />
  );
};

export default Select;
