import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';
import { Subheading, Avatar, Headline, Colors } from 'react-native-paper';

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
      <Headline style={styles.title}>Cristofer Westervelt</Headline>
      <Subheading style={styles.job}>Fullstack JS Engineer</Subheading>
      <View style={styles.levelWrapper}>
        <Avatar.Icon
          size={24}
          color={Colors.deepPurple600}
          style={styles.levelIcon}
          icon="shield-check"
        />
        <Text style={styles.levelText}>Level 2</Text>
      </View>
    </View>
  );
};

export default UserInfo;
