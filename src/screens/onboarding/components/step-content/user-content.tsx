import React from 'react';
import { View } from 'react-native';
import { Avatar } from 'react-native-paper';

import { HeadingLevel } from 'src/common/enums';
import { Heading, Input } from 'src/components';
import styles from './styles';

type UserContentScreenProps = Record<string, never>;

const UserContent: React.FC<UserContentScreenProps> = () => {
  return (
    <View style={styles.content}>
      <Heading style={styles.header} level={HeadingLevel.H4}>
        Tell Us About Yourself
      </Heading>
      <View style={styles.imageContainer}>
        <Avatar.Image
          size={150}
          source={require('src/assets/images/user-icon.jpeg')}
        />
      </View>
      <Input
        style={styles.input}
        label="First name"
        placeholder="Enter first name"
      />
      <Input
        style={styles.input}
        label="Last name"
        placeholder="Enter last name"
      />
      <Input
        style={styles.input}
        label="Position"
        placeholder="Enter your position"
      />
    </View>
  );
};

export default UserContent;
