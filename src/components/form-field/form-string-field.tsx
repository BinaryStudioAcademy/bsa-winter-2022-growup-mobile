import React from 'react';
import { FormField, FormFieldProps } from '.';
import { Input, InputUIProps } from '..';

interface InputPropsPart {
  inputProps: InputUIProps;
}

const FormStringField: React.FC<FormFieldProps & InputPropsPart> = ({
  inputProps,
  ...fieldProps
}) => {
  return (
    <FormField {...fieldProps}>
      {({ value, handleChange }) => (
        <Input value={value} onChangeText={handleChange} {...inputProps} />
      )}
    </FormField>
  );
};

export default FormStringField;
