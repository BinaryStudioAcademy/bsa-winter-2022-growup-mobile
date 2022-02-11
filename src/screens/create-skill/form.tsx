import React from 'react';
import { View } from 'react-native';
import * as yup from 'yup';

import { ButtonMode, HeadingLevel, SkillType } from 'src/common/enums';
import { ICreateSkill } from 'src/common/types';

import {
  Form,
  FormField,
  Heading,
  Input,
  MainButton,
  Select,
} from 'src/components';

import { getNumericEnumValues } from 'src/common/helpers';
import styles from './styles';

interface Props {
  onSubmit: (data: ICreateSkill) => void;
  onCancel: () => void;
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
  {
    label: 'Other',
    value: SkillType.Other,
  },
];

const validationSchema = yup.object({
  type: yup
    .number()
    .integer()
    .oneOf(getNumericEnumValues(SkillType))
    .required('Type must be selected'),
  name: yup.string().required('Name must not be empty'),
  description: yup.string(),
  estimate: yup
    .number()
    .typeError('Estimate must be a valid number')
    .min(0, 'Estimate must be from 0 to 10')
    .max(10, 'Estimate must be from 0 to 10')
    .required('Estimate must not be empty'),
});

const CreateSkillForm: React.FC<Props> = ({ onSubmit, onCancel }) => {
  return (
    <Form<ICreateSkill>
      initialValues={{ type: SkillType.Other }}
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
        isValid,
      }) => (
        <View>
          <Heading level={HeadingLevel.H4}>Create skill</Heading>
          <FormField
            error={errors.type}
            touched={touched.type as boolean | undefined}
          >
            <Select
              label="Type"
              placeholder="What kind of skill is it?"
              value={values.type}
              setValue={value => setFieldValue('type', value)}
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
              value={values.name ?? ''}
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
              value={values.description ?? ''}
              onChangeText={handleChange('description')}
            />
          </FormField>
          <FormField
            error={errors.estimate}
            touched={touched.estimate as boolean | undefined}
          >
            <Input
              label="Estimate"
              placeholder="What is your level?"
              keyboardType="numeric"
              value={values.estimate ? String(values.estimate) : ''}
              onChangeText={text => setFieldValue('estimate', Number(text))}
            />
          </FormField>
          <View style={styles.buttons}>
            <MainButton
              mode={ButtonMode.CONTAINED}
              disabled={!isValid}
              onPress={handleSubmit}
            >
              Save
            </MainButton>
            <MainButton mode={ButtonMode.TEXT} onPress={onCancel}>
              Back
            </MainButton>
          </View>
        </View>
      )}
    </Form>
  );
};

export default CreateSkillForm;
