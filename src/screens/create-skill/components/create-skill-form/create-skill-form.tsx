import React from 'react';
import { Formik } from 'formik';
import { View } from 'react-native';

import { ButtonMode, HeadingLevel } from 'src/common/enums';
import { ICreateSkillPayload } from 'src/common/types/skill';
import { createSkillValidationSchema } from 'src/validation-schemas';
import { FormInput, FormSelect, Heading, MainButton } from 'src/components';
import { defaultCreateSkillPayload, skillTypeOptions } from '../../common';
import useStyles from '../../styles';

type CreateSkillFormProps = {
  onSubmit: (data: ICreateSkillPayload) => void;
  onBack: () => void;
};

const CreateSkillForm: React.FC<CreateSkillFormProps> = ({
  onSubmit,
  onBack,
}) => {
  const styles = useStyles();

  const handleFormSubmit = (values: ICreateSkillPayload) => {
    onSubmit(values);
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
          <View style={styles.inputContent}>
            <Heading style={styles.heading} level={HeadingLevel.H5}>
              Category
            </Heading>
            <FormSelect
              name="type"
              label="Type"
              placeholder="What kind of skill is it?"
              list={skillTypeOptions}
            />
          </View>

          <View style={styles.inputContent}>
            <Heading style={styles.heading} level={HeadingLevel.H5}>
              Name
            </Heading>
            <FormInput
              name="name"
              label="Name"
              placeholder="Enter skill name"
            />
          </View>

          <View style={styles.buttonContainer}>
            <MainButton
              style={styles.button}
              onPress={onBack}
              mode={ButtonMode.OUTLINED}
            >
              Cancel
            </MainButton>
            <MainButton
              onPress={handleSubmit}
              disabled={!isValid}
              mode={ButtonMode.CONTAINED}
            >
              Save
            </MainButton>
          </View>
        </>
      )}
    </Formik>
  );
};

export default CreateSkillForm;
