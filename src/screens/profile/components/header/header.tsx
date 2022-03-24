import React, { useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Menu } from 'react-native-paper';

import { AppColor, HeadingLevel } from 'src/common/enums';
import { DotsVerticalIcon, Heading } from 'src/components';
import { useAppDispatch } from 'src/hooks';
import { authActions } from 'src/store/actions';
import styles from './styles';

const Header: React.FC = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const dispatch = useAppDispatch();

  const handleOpenMenu = () => setMenuVisible(true);

  const handleCloseMenu = () => setMenuVisible(false);

  const handleLogout = () => {
    dispatch(authActions.signOut());
  };

  return (
    <View style={styles.headerContent}>
      <Heading level={HeadingLevel.H5} style={styles.headingText}>
        User profile
      </Heading>
      <View style={styles.headerMenu}>
        <Menu
          visible={menuVisible}
          onDismiss={handleCloseMenu}
          anchor={
            <TouchableOpacity onPress={handleOpenMenu}>
              <DotsVerticalIcon color={AppColor.BLACK} size={30} />
            </TouchableOpacity>
          }
        >
          <Menu.Item onPress={handleLogout} title="Logout" />
        </Menu>
      </View>
    </View>
  );
};

export default Header;
