import React from 'react';
import { View } from 'react-native';

import { ShieldCheckIcon, Heading, Text, Avatar } from 'src/components';
import { HeadingLevel } from 'src/common/enums';
import { useAppSelector, useColor } from 'src/hooks';
import useStyles from './styles';

const UserInfo: React.FC = () => {
  const styles = useStyles();
  const colorPrimary = useColor('PRIMARY');

  const { user } = useAppSelector(state => state.auth);

  if (!user) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Avatar size={152} style={styles.avatar} user={user} />
      <View>
        <Heading level={HeadingLevel.H4} style={styles.name}>
          {user.firstName} {user.lastName}
        </Heading>
        {Boolean(user.level) && (
          <>
            <Text style={styles.role}>{user.level.domain.name}</Text>
            <View style={styles.levelWrapper}>
              <ShieldCheckIcon color={colorPrimary} size={15} />
              <Text style={styles.levelText}>{user.level.name}</Text>
            </View>
          </>
        )}
      </View>
    </View>
  );
};

export default UserInfo;
