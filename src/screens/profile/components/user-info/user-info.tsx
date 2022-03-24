import React from 'react';
import { View } from 'react-native';
import { Avatar } from 'react-native-paper';

import { ShieldCheckIcon, Heading, Text } from 'src/components';
import { HeadingLevel } from 'src/common/enums';
import { useColor } from 'src/hooks';
import useStyles from './styles';

const UserInfo: React.FC = () => {
  const styles = useStyles();
  const colorPrimary = useColor('PRIMARY');

  return (
    <View style={styles.container}>
      <Avatar.Icon size={152} icon="account" style={styles.avatar} />
      <View>
        <Heading level={HeadingLevel.H4} style={styles.name}>
          Cristofer Westervelt
        </Heading>
        <Text style={styles.role}>Fullstack JS Engineer</Text>
        <View style={styles.levelWrapper}>
          <ShieldCheckIcon color={colorPrimary} size={15} />
          <Text style={styles.levelText}>Level 2</Text>
        </View>
      </View>
    </View>
  );
};

export default UserInfo;
