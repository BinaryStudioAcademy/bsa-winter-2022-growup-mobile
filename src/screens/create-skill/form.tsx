import React from 'react';
import * as yup from 'yup';

import { SkillType } from 'src/common/enums';
import { ICreateSkill } from 'src/common/types';
import { Form, FormField, Input, MainButton, Select } from 'src/components';
import { getNumericEnumValues } from 'src/common/helpers';

interface Props {
  onSubmit: (data: ICreateSkill) => void;
}

const skillTypeOptions = [
  {
    label: 'Hard skills',
    value: SkillType.HardSkills,
  },
  {
    label: 'Soft skills',
    value: SkillType.SoftSkills,
  },
];

const validationSchema = yup.object({
  type: yup
    .number()
    .integer()
    .oneOf(getNumericEnumValues(SkillType))
    .required(),
  name: yup.string().min(1).required(),
  description: yup.string().required(),
  estimate: yup.number().min(0).max(10).required(),
});

const CreateSkillForm: React.FC<Props> = ({ onSubmit }) => {
  return (
    <Form<ICreateSkill>
      initialValues={{}}
      validationSchema={validationSchema}
      validateOnChange={true}
      validateOnBlur={true}
      onSubmit={onSubmit}
    >
      {({
        handleChange,
        handleSubmit,
        setFieldValue,
        values,
        errors,
        touched,
      }) => (
        <>
          <FormField
            error={errors.type}
            touched={touched.type as boolean | undefined}
          >
            <Select
              label="Type"
              placeholder="What kind of skill is it?"
              value={values.type}
              setValue={handleChange('type')}
              list={skillTypeOptions}
            />
          </FormField>
          <FormField
            error={errors.name}
            touched={touched.name as boolean | undefined}
          >
            <Input
              label="Name"
              placeholder="Enter skill name..."
              value={values.name}
              onChangeText={handleChange('name')}
            />
          </FormField>
          <FormField
            error={errors.description}
            touched={touched.description as boolean | undefined}
          >
            <Input
              label="Description"
              placeholder="Enter description..."
              value={values.description}
              onChangeText={handleChange('description')}
            />
          </FormField>
          <FormField
            error={errors.estimate}
            touched={touched.estimate as boolean | undefined}
          >
            <Input
              label="Estimate"
              placeholder="Enter description..."
              value={values.description}
              onChangeText={text => setFieldValue('estimate', Number(text))}
            />
          </FormField>
          <MainButton onPress={handleSubmit}>Save</MainButton>
        </>
      )}
    </Form>
  );
};

export default CreateSkillForm;
