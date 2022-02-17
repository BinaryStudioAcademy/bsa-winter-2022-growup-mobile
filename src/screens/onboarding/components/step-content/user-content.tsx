import React from 'react';
import { Formik } from 'formik';
import { ScrollView, View } from 'react-native';
import { Avatar } from 'react-native-paper';

import { AppColor, HeadingLevel } from 'src/common/enums';
import { FormInput, Heading } from 'src/components';
import { userInfoValidationSchema } from 'src/validation-schemas';
import { defaultAddUserInfoPayload } from './common';
import styles from './styles';

const UserContent: React.FC = () => {
  return (
    <View style={styles.content}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Heading style={styles.header} level={HeadingLevel.H4}>
          Tell Us About Yourself
        </Heading>
        <View style={styles.imageContainer}>
          <Avatar.Icon
            style={styles.userAvatar}
            size={152}
            color={AppColor.WHITE}
            icon="account"
          />
        </View>
        <Formik
          initialValues={defaultAddUserInfoPayload}
          validationSchema={userInfoValidationSchema}
          onSubmit={() => {
            // TODO
          }}
        >
          <>
            <FormInput
              containerStyle={styles.input}
              label="First name"
              placeholder="Enter first name"
              name="firstName"
            />
            <FormInput
              containerStyle={styles.input}
              label="Last name"
              placeholder="Enter last name"
              name="lastName"
            />
            <FormInput
              containerStyle={styles.input}
              label="Position"
              placeholder="Enter your position"
              name="position"
            />
          </>
        </Formik>
      </ScrollView>
    </View>
  );
};

export default UserContent;