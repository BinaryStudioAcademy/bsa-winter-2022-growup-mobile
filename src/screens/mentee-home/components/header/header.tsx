import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Appbar } from 'react-native-paper';

import { ProfileRoute } from 'src/common/enums';
import { Avatar } from 'src/components';
import { useAppNavigation, useAppSelector } from 'src/hooks';
import useStyles from './styles';

const Header: React.FC = () => {
  const styles = useStyles();

  const navigation = useAppNavigation();
  const { user } = useAppSelector(state => state.auth);

  const handleAvatarPress = () => {
    navigation.navigate(ProfileRoute.PROFILE_ROOT);
  };

  if (!user) {
    return null;
  }

  const greeting = user?.firstName ? `Hey, ${user?.firstName}!` : 'Hey there!';

  return (
    <Appbar.Header>
      <Appbar.Content title={greeting} />
      <TouchableOpacity onPress={handleAvatarPress}>
        <Avatar size={36} user={user} style={styles.avatar} />
      </TouchableOpacity>
    </Appbar.Header>
  );
};

export default Header;
