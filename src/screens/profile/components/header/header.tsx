import React, { useState } from 'react';
import { useWindowDimensions } from 'react-native';
import { Appbar, Menu } from 'react-native-paper';

import { useAppDispatch } from 'src/hooks';
import { authActions } from 'src/store/actions';

const Header: React.FC = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const dispatch = useAppDispatch();

  const handleChangeMenuVisibility = () => setMenuVisible(current => !current);

  const handleLogout = () => {
    dispatch(authActions.signOut());
  };

  const { width: windowWidth } = useWindowDimensions();

  return (
    <>
      <Appbar.Header>
        <Appbar.Content title="Profile" />
        <Appbar.Action
          icon="dots-vertical"
          onPress={handleChangeMenuVisibility}
        />
      </Appbar.Header>
      <Menu
        visible={menuVisible}
        onDismiss={handleChangeMenuVisibility}
        anchor={{ x: windowWidth, y: 50 }}
      >
        <Menu.Item onPress={handleLogout} title="Logout" />
      </Menu>
    </>
  );
};

export default Header;
