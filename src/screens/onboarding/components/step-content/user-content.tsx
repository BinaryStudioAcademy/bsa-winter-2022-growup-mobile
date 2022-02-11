import React from 'react';
import { View } from 'react-native';
import { HeadingLevel } from 'src/common/enums';

import { Heading, Input } from 'src/components';
import styles from './styles';

type IUserContentScreenProps = Record<string, never>;

const UserContent: React.FC<IUserContentScreenProps> = () => {
  return (
    <View style={styles.content}>
      <Heading style={styles.header} level={HeadingLevel.H5}>
        User information
      </Heading>
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
