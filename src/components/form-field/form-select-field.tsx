import React from 'react';
import { FormField, FormFieldProps } from '.';
import { Select, SelectUIProps } from '..';

interface SelectPropsPart {
  selectProps: SelectUIProps;
}

const FormSelectField: React.FC<FormFieldProps & SelectPropsPart> = ({
  selectProps,
  ...fieldProps
}) => {
  return (
    <FormField<number> {...fieldProps} valueFromString={text => Number(text)}>
      {({ value, handleChange }) => (
        <Select value={value} setValue={handleChange} {...selectProps} />
      )}
    </FormField>
  );
};

export default FormSelectField;
