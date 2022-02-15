import React from 'react';
import { ScrollView, View } from 'react-native';
import { Avatar } from 'react-native-paper';

import { AppColor, HeadingLevel } from 'src/common/enums';
import { Heading, Input } from 'src/components';
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
            size={150}
            color={AppColor.WHITE}
            icon="account"
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
      </ScrollView>
    </View>
  );
};

export default UserContent;
