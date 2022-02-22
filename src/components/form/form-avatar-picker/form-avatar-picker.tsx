import { useFormikContext } from 'formik';
import React from 'react';
import { Asset } from 'react-native-image-picker';
import { AvatarPicker } from 'src/components';

type FormAvatarPickerProps = {
  name: string;
};

const FormAvatarPicker: React.FC<FormAvatarPickerProps> = ({ name }) => {
  const { setFieldValue } = useFormikContext();

  const handlePick = (asset?: Asset) => {
    setFieldValue(name, asset);
  };

  return <AvatarPicker onPick={handlePick} />;
};

export default FormAvatarPicker;
