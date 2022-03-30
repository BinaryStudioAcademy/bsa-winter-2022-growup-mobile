import { useFormikContext } from 'formik';
import React from 'react';
import { Asset } from 'react-native-image-picker';

import { ImagePicker } from 'src/components';

type FormImagePickerProps = {
  name: string;
  buttonText: string;
};

const FormImagePicker: React.FC<FormImagePickerProps> = ({
  name,
  buttonText,
}) => {
  const { setFieldValue } = useFormikContext();

  const handlePick = (asset?: Asset) => {
    setFieldValue(name, asset);
  };

  return <ImagePicker buttonText={buttonText} onPick={handlePick} />;
};

export default FormImagePicker;
