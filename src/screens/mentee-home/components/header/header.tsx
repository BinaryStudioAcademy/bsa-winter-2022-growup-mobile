import React from 'react';
import { TouchableOpacity, View } from 'react-native';

import { HeadingLevel, ProfileRoute } from 'src/common/enums';
import { Avatar, Heading } from 'src/components';
import { useAppNavigation, useAppSelector } from 'src/hooks';
import useStyles from './styles';

type HeaderProps = {
  children: string;
};

const Header: React.FC<HeaderProps> = ({ children }) => {
  const styles = useStyles();

  const navigation = useAppNavigation();
  const { user } = useAppSelector(state => state.auth);

  const handleAvatarPress = () => {
    navigation.navigate(ProfileRoute.PROFILE_ROOT);
  };

  if (!user) {
    return null;
  }

  return (
    <View style={styles.header}>
      <Heading level={HeadingLevel.H5}>{children}</Heading>
      <TouchableOpacity onPress={handleAvatarPress}>
        <Avatar size={40} user={user} />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
