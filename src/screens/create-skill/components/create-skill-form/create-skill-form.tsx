import React from 'react';
import { Formik } from 'formik';
import { View } from 'react-native';

import { ButtonMode, HeadingLevel } from 'src/common/enums';
import { ICreateSkillPayload } from 'src/common/types/skill';
import { createSkillValidationSchema } from 'src/validation-schemas';
import { FormInput, FormSelect, Heading, MainButton } from 'src/components';
import { defaultCreateSkillPayload, skillTypeOptions } from '../../common';
import styles from '../../styles';

type CreateSkillFormProps = {
  onSubmit: (data: ICreateSkillPayload) => void;
  onBack: () => void;
};

const CreateSkillForm: React.FC<CreateSkillFormProps> = ({
  onSubmit,
  onBack,
}) => {
  const handleFormSubmit = (values: ICreateSkillPayload) => {
    onSubmit({ ...values, estimate: Number(values.estimate) });
  };

  return (
    <Formik
      initialValues={defaultCreateSkillPayload}
      validationSchema={createSkillValidationSchema}
      validateOnMount={true}
      onSubmit={handleFormSubmit}
    >
      {({ isValid, handleSubmit }) => (
        <>
          <Heading level={HeadingLevel.H4}>Create skill</Heading>
          <FormSelect
            name="type"
            label="Type"
            placeholder="What kind of skill is it?"
            list={skillTypeOptions}
          />
          <FormInput
            name="name"
            label="Name"
            placeholder="Enter skill name..."
          />
          <FormInput
            name="description"
            label="Description"
            placeholder="Enter description..."
          />
          <FormInput
            name="estimate"
            label="Estimate"
            placeholder="What is your level?"
            keyboardType="numeric"
          />
          <View style={styles.buttons}>
            <MainButton
              mode={ButtonMode.CONTAINED}
              disabled={!isValid}
              compact={true}
              onPress={handleSubmit}
            >
              Save
            </MainButton>
            <MainButton mode={ButtonMode.TEXT} compact={true} onPress={onBack}>
              Back
            </MainButton>
          </View>
        </>
      )}
    </Formik>
  );
};

export default CreateSkillForm;
