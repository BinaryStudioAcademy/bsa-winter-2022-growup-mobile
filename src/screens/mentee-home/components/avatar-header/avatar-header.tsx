import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { AppRoute, HeadingLevel } from 'src/common/enums';
import { Heading } from 'src/components';
import { Avatar } from '..';
import styles from './styles';

interface Props {
  children: string;
  avatarUrl?: string;
}

const AvatarHeader: React.FC<Props> = ({ avatarUrl, children }) => {
  const navigation = useNavigation();

  const handleAvatarPress = () => {
    navigation.navigate({
      name: AppRoute.PROFILE as never,
      params: {} as never,
    });
  };

  return (
    <View style={styles.header}>
      <Heading level={HeadingLevel.H5}>{children}</Heading>
      <TouchableOpacity onPress={handleAvatarPress}>
        <Avatar url={avatarUrl} />
      </TouchableOpacity>
    </View>
  );
};

export default AvatarHeader;
