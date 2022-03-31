import React from 'react';
import { View } from 'react-native';
import { Formik } from 'formik';

import { defaultAddUserPayload, roleTypeOptions } from './common';
import { addUserValidationSchema } from 'src/validation-schemas';
import { FormInput, FormSelect, MainButton } from 'src/components';
import { ButtonMode } from 'src/common/enums';
import { useAppNavigation } from 'src/hooks';
import useStyles from './styles';

const AddUser: React.FC = () => {
  const styles = useStyles();

  const navigation = useAppNavigation();

  const handleAddUser = () => {
    /* TODO */
  };

  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <Formik
      initialValues={defaultAddUserPayload}
      validationSchema={addUserValidationSchema}
      validateOnBlur={true}
      onSubmit={handleAddUser}
    >
      {({ isValid, handleSubmit }) => (
        <View style={styles.screen}>
          <FormInput
            name="firstName"
            label="First name"
            placeholder="Enter first name.."
          />
          <FormInput
            name="lastName"
            label="Last name"
            placeholder="Enter last name..."
            style={styles.topPadded}
          />
          <FormSelect
            name="role"
            label="Role"
            placeholder="Select user role..."
            list={roleTypeOptions}
            containerStyle={styles.topPadded}
          />
          <FormInput
            name="email"
            label="Email"
            placeholder="Enter email..."
            style={styles.topPadded}
          />
          <View style={[styles.buttons, styles.topPadded]}>
            <MainButton
              mode={ButtonMode.CONTAINED}
              disabled={!isValid}
              compact={true}
              onPress={handleSubmit}
            >
              Invite
            </MainButton>
            <MainButton
              mode={ButtonMode.TEXT}
              compact={true}
              onPress={handleBack}
            >
              Back
            </MainButton>
          </View>
        </View>
      )}
    </Formik>
  );
};

export default AddUser;
