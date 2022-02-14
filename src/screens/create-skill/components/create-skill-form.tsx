import React from 'react';
import { View } from 'react-native';

import { ButtonMode, HeadingLevel } from 'src/common/enums';
import { ICreateSkillPayload } from 'src/common/types';

import {
  Form,
  FormField,
  Heading,
  Input,
  MainButton,
  Select,
} from 'src/components';
import { createSkillValidationSchema } from 'src/validation-schemas';

import { DEFAULT_CREATE_SKILL_PAYLOAD, SKILL_TYPE_OPTIONS } from '../constants';
import styles from '../styles';

interface Props {
  onSubmit: (data: ICreateSkillPayload) => void;
  onBack: () => void;
}

const CreateSkillForm: React.FC<Props> = ({ onSubmit, onBack }) => {
  return (
    <Form<ICreateSkillPayload>
      initialValues={DEFAULT_CREATE_SKILL_PAYLOAD}
      validationSchema={createSkillValidationSchema}
      validateOnMount={true}
      validateOnChange={true}
      validateOnBlur={true}
      onSubmit={onSubmit}
    >
      {formikProps => (
        <View>
          <Heading level={HeadingLevel.H4}>Create skill</Heading>
          <FormField<number>
            name="type"
            formikProps={formikProps}
            valueFromString={str => Number(str)}
          >
            {({ value, handleChange }) => (
              <Select
                label="Type"
                placeholder="What kind of skill is it?"
                value={value}
                setValue={handleChange}
                list={SKILL_TYPE_OPTIONS}
              />
            )}
          </FormField>
          <FormField name="name" formikProps={formikProps}>
            {({ value, handleChange }) => (
              <Input
                label="Name"
                placeholder="Enter skill name..."
                value={value}
                onChangeText={handleChange}
              />
            )}
          </FormField>
          <FormField name="description" formikProps={formikProps}>
            {({ value, handleChange }) => (
              <Input
                label="Description"
                placeholder="Enter description..."
                value={value}
                onChangeText={handleChange}
              />
            )}
          </FormField>
          <FormField<number> name="estimate" formikProps={formikProps}>
            {({ value, handleChange }) => (
              <Input
                label="Estimate"
                placeholder="What is your level?"
                keyboardType="numeric"
                value={value ? String(value) : ''}
                onChangeText={handleChange}
              />
            )}
          </FormField>
          <View style={styles.buttons}>
            <MainButton
              mode={ButtonMode.CONTAINED}
              disabled={!formikProps.isValid}
              compact={true}
              onPress={formikProps.handleSubmit}
            >
              Save
            </MainButton>
            <MainButton mode={ButtonMode.TEXT} compact={true} onPress={onBack}>
              Back
            </MainButton>
          </View>
        </View>
      )}
    </Form>
  );
};

export default CreateSkillForm;
