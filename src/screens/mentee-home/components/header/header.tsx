import React from 'react';
import { TouchableOpacity, View } from 'react-native';

import { AppRoute, HeadingLevel } from 'src/common/enums';
import { Heading } from 'src/components';
import { Avatar } from '..';
import styles from './styles';
import { useAppNavigation } from 'src/hooks';

type HeaderProps = {
  children: string;
  avatarUrl?: string;
};

const Header: React.FC<HeaderProps> = ({ avatarUrl, children }) => {
  const navigation = useAppNavigation();

  const handleAvatarPress = () => {
    navigation.navigate(AppRoute.PROFILE);
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

export default Header;
