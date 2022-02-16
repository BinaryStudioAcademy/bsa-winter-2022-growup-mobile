import React from 'react';
import { View } from 'react-native';
import { Avatar } from 'react-native-paper';

import { Heading, Text } from 'src/components';
import { AppColor, HeadingLevel } from 'src/common/enums';

import styles from './styles';

const UserInfo = () => {
  return (
    <View style={styles.container}>
      <Avatar.Image
        size={148}
        source={{
          uri: 'https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png',
        }}
        style={styles.avatar}
      />
      <View>
        <Heading level={HeadingLevel.H4} style={styles.name}>
          Cristofer Westervelt
        </Heading>
        <Text style={styles.role}>Fullstack JS Engineer</Text>
        <View style={styles.levelWrapper}>
          <Avatar.Icon
            size={24}
            color={AppColor.PRIMARY}
            style={styles.levelIcon}
            icon="shield-check"
          />
          <Text style={styles.levelText}>Level 2</Text>
        </View>
      </View>
    </View>
  );
};

export default UserInfo;