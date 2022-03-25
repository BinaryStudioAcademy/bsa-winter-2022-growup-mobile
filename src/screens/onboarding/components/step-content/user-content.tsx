import React from 'react';
import { ScrollView, View } from 'react-native';
import { Avatar } from 'react-native-paper';

import { HeadingLevel } from 'src/common/enums';
import { IUserInfo } from 'src/common/types';
import { FormAvatarPicker, FormInput, Heading } from 'src/components';
import { useColor } from 'src/hooks';
import useStyles from './styles';

type UserContentProps = {
  values: IUserInfo;
};

const UserContent: React.FC<UserContentProps> = ({ values }) => {
  const styles = useStyles();
  const colorWhite = useColor('WHITE');

  return (
    <View style={styles.content}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Heading style={styles.header} level={HeadingLevel.H4}>
          Tell Us About Yourself
        </Heading>

        <View style={styles.imageContainer}>
          {values.avatar?.uri ? (
            <Avatar.Image
              style={styles.userAvatar}
              size={152}
              source={{ uri: values.avatar.uri }}
            />
          ) : (
            <Avatar.Icon
              style={styles.userAvatar}
              size={152}
              color={colorWhite}
              icon="account"
            />
          )}
        </View>
        <FormAvatarPicker name="avatar" />
        <FormInput
          containerStyle={styles.input}
          placeholder="Enter first name"
          name="firstName"
        />
        <FormInput
          containerStyle={styles.input}
          placeholder="Enter last name"
          name="lastName"
        />
        <FormInput
          containerStyle={styles.input}
          placeholder="Enter your position"
          name="position"
        />
      </ScrollView>
    </View>
  );
};

export default UserContent;
