import { Formik } from 'formik';
import React from 'react';
import { View } from 'react-native';

import { ButtonMode, HeadingLevel } from 'src/common/enums';
import { ICreateSkillPayload } from 'src/common/types/skill';
import { FormInput, FormSelect, Heading, MainButton } from 'src/components';
import { createSkillValidationSchema } from 'src/validation-schemas';
import { DEFAULT_CREATE_SKILL_PAYLOAD, SKILL_TYPE_OPTIONS } from '../constants';
import styles from '../styles';

interface Props {
  onSubmit: (data: ICreateSkillPayload) => void;
  onBack: () => void;
}

const CreateSkillForm: React.FC<Props> = ({ onSubmit, onBack }) => {
  return (
    <Formik<ICreateSkillPayload>
      initialValues={DEFAULT_CREATE_SKILL_PAYLOAD}
      validationSchema={createSkillValidationSchema}
      validateOnMount={true}
      validateOnChange={true}
      validateOnBlur={true}
      onSubmit={onSubmit}
    >
      {({ isValid, handleSubmit }) => (
        <>
          <Heading level={HeadingLevel.H4}>Create skill</Heading>
          <FormSelect
            name="type"
            label="Type"
            placeholder="What kind of skill is it?"
            list={SKILL_TYPE_OPTIONS}
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
