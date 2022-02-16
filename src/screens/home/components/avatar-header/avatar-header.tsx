import React from 'react';
import { View } from 'react-native';

import { HeadingLevel } from 'src/common/enums';
import { Heading } from 'src/components';
import { Avatar } from '..';
import styles from './styles';

interface Props {
  children: string;
  avatarUrl?: string;
}

const AvatarHeader: React.FC<Props> = ({ avatarUrl, children }) => {
  return (
    <View style={styles.header}>
      <Heading level={HeadingLevel.H6}>{children}</Heading>
      <Avatar url={avatarUrl} />
    </View>
  );
};

export default AvatarHeader;
