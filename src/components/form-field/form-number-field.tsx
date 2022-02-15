import React from 'react';
import { FormField, FormFieldProps } from '.';
import { Input, InputUIProps } from '..';

interface InputPropsPart {
  inputProps: InputUIProps;
}

const FormNumberField: React.FC<FormFieldProps & InputPropsPart> = ({
  inputProps,
  ...fieldProps
}) => {
  return (
    <FormField<number> {...fieldProps}>
      {({ value, handleChange }) => (
        <Input
          value={value ? String(value) : ''}
          onChangeText={handleChange}
          {...inputProps}
        />
      )}
    </FormField>
  );
};

export default FormNumberField;
